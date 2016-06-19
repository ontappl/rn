import React from 'react';
import {connect} from 'react-redux';
import {
    NavigationExperimental,
    BackAndroid,
} from 'react-native';

import {Cities} from './Cities';
import {City} from './City';
import {Pub} from './Pub';
import * as navigationActions from '../navigation/actions';


class RootContainer extends React.Component {
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => this.props.navigationPop('BackAndroid'));
    }

    render() {
        const {navigationState, onNavigate} = this.props;

        return (
            <NavigationExperimental.Transitioner
                style={{flex: 1}}
                renderOverlay={this._renderOverlay.bind(this)}
                renderScene={this._renderCard.bind(this)}
                navigationState={navigationState}
                onNavigate={onNavigate}
            />
        );
    }

    _renderOverlay(props) {
        return <NavigationExperimental.Header {...props}/>;
    }

    _renderCard(props) {
        const {navigationState, onNavigate} = this.props;
        return (
            <NavigationExperimental.Card
                {...props}
                navigationState={navigationState}
                onNavigate={onNavigate}
                renderScene={this._renderScene.bind(this)}
                key={props.scene.route.key}
            />
        );
    }

    _renderScene(props) {
        switch (props.scene.route.key) {
            case 'cities':
                return <Cities key={props.scene.route.key}/>;
            case 'city':
                return <City key={props.scene.route.key} city={props.scene.route.city}/>;
            case 'pub':
                return <Pub key={props.scene.route.key} pub={props.scene.route.pub}/>;
        }
    }
}

const mapStateToProps = ({navigation}) => ({
    navigationState: navigation,
});

const dispatchActions = (dispatch) => ({
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
});


export const Root = connect(mapStateToProps, dispatchActions)(RootContainer);
