import React from 'react';
import {connect} from 'react-redux';
import {
    BackAndroid,
    View,
    StatusBar,
    NavigationExperimental,
} from 'react-native';

import {colors} from '../components';
import * as rootNavigatorKeys from '../rootNavigatorKeys';
import * as actions from '../actions/rootNavigator';
import {OnboardingSelectCity} from './OnboardingSelectCity';
import {Home} from './Home';
import {Pub} from './Pub';


class RootNavigatorContainer extends React.Component {
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            console.log('lol');
            this.props.pop('BackAndroid');
            return true;
        });
    }

    render() {
        const {navigationState} = this.props;

        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={colors.primaryDark}/>
                <NavigationExperimental.Transitioner
                    style={{flex: 1}}
                    navigationState={navigationState}
                    render={this._render.bind(this)}
                    onTransitionEnd={this._onTransitionEnd.bind(this)}
                />
            </View>
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

const mapDispatchToProps = {
    pop: actions.pop,
    resetOnCurrentScene: actions.resetOnCurrentScene,
};

export const RootNavigator = connect(mapStateToProps, mapDispatchToProps)(RootNavigatorContainer);
