import React from 'react';
import {connect} from 'react-redux';
import {
    NavigationExperimental,
} from 'react-native';

import * as rootNavigatorKeys from '../rootNavigatorKeys';
import * as actions from '../actions2/rootNavigator';
import {OnboardingSelectCity} from './OnboardingSelectCity';
import {Home} from './Home';
import {Pub} from './Pub';

class RootNavigatorContainer extends React.Component {
    render() {
        const {navigationState} = this.props;

        return (
            <NavigationExperimental.Transitioner
                style={{flex: 1}}
                navigationState={navigationState}
                render={this._render.bind(this)}
                onTransitionEnd={this._onTransitionEnd.bind(this)}
            />
        );
    }

    _render(transitionProps) {
        const routeKey = transitionProps.scene.route.key;

        switch (routeKey) {
            case rootNavigatorKeys.ONBOARDING_SELECT_CITY:
                return <OnboardingSelectCity key={routeKey}/>;
            case rootNavigatorKeys.HOME:
                return <Home key={routeKey}/>;
            case rootNavigatorKeys.PUB:
                return <Pub key={routeKey}/>;
            default:
                throw `Unexpected scene key ${routeKey}`
        }
    }

    _onTransitionEnd() {
        const {navigationState, resetOnCurrentScene} = this.props;
        const {routes} = navigationState;

        const twoRoutes = routes.length === 2;
        const previousWasOnboarding = twoRoutes && routes[0].key === rootNavigatorKeys.ONBOARDING_SELECT_CITY;
        const currentIsHome = twoRoutes && routes[1].key === rootNavigatorKeys.HOME;
        if (twoRoutes && previousWasOnboarding && currentIsHome) {
            resetOnCurrentScene();
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
