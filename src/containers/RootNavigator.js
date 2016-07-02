import React from 'react';
import {connect} from 'react-redux';
import {
    NavigationExperimental,
    BackAndroid,
    InteractionManager,
} from 'react-native';

import * as rootNavigatorKeys from '../rootNavigatorKeys';
import * as actions from '../actions2/rootNavigator';
import {OnboardingSelectCity} from './OnboardingSelectCity';
import {Home} from './Home';

class RootNavigatorContainer extends React.Component {
    render() {
        const {navigationState, onNavigate} = this.props;

        return (
            <NavigationExperimental.Transitioner
                style={{flex: 1}}
                renderScene={this._renderCard.bind(this)}
                navigationState={navigationState}
                onNavigate={onNavigate}
                onTransitionEnd={this._onTransitionEnd.bind(this)}
            />
        );
    }

    _renderCard(props) {
        const {navigationState, onNavigate} = this.props;
        return (
            <NavigationExperimental.Card
                {...props}
                navigationState={navigationState}
                onNavigate={onNavigate}
                renderScene={this._renderScene}
                key={props.scene.route.key}
            />
        );
    }

    _renderScene(props) {
        switch (props.scene.route.key) {
            case rootNavigatorKeys.ONBOARDING_SELECT_CITY:
                return <OnboardingSelectCity key={props.scene.route.key}/>;
            case rootNavigatorKeys.HOME:
                return <Home key={props.scene.route.key}/>;
            default:
                throw `Unexpected scene key ${props.scene.route.key}`
        }
    }

    _onTransitionEnd() {
        console.log('_onTransitionEnd');
        const {navigationState, resetOnCurrentScene} = this.props;
        const {index, routes} = navigationState;
        console.log(index, routes);
        
        const twoRoutes = routes.length === 2;
        const previousWasOnboarding = twoRoutes && routes[0].key === rootNavigatorKeys.ONBOARDING_SELECT_CITY;
        const currentIsHome = twoRoutes && routes[1].key === rootNavigatorKeys.HOME;
        if (twoRoutes && previousWasOnboarding && currentIsHome) {
            InteractionManager.runAfterInteractions(() => resetOnCurrentScene());
        }
    }
}

const mapStateToProps = ({rootNavigator}) => ({
    navigationState: rootNavigator,
});

const mapDispatchToProps = (dispatch) => ({
    onNavigate: action => {
        const isBackFromOverlay = action.type === 'BackAction';
        const isBackFromCard = action.type === NavigationExperimental.Card.CardStackPanResponder.Actions.BACK.type;
        if (isBackFromOverlay || isBackFromCard) {
            dispatch(navigationActions.pop());
        } else {
            dispatch(navigationActions.push(action));
        }
    },
    navigationPop: (source) => dispatch(navigationActions.pop(source)),
    resetOnCurrentScene: () => dispatch(actions.resetOnCurrentScene()),
});

export const RootNavigator = connect(mapStateToProps, mapDispatchToProps)(RootNavigatorContainer);
