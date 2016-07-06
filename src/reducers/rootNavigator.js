import {BackAndroid} from 'react-native';
import * as NavigationStateUtils from 'NavigationStateUtils';

import * as rootNavigatorKeys from '../rootNavigatorKeys';
import * as actionTypes from '../actionTypes/rootNavigator';


const initialState = {
    index: 0,
    routes: [
        {key: rootNavigatorKeys.ONBOARDING_SELECT_CITY},
    ],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUSH: {
            return NavigationStateUtils.push(state, action.newState);
        }
        case actionTypes.POP: {
            if (state.index === 0 && action.source === 'BackAndroid') {
                BackAndroid.exitApp();
                return state;
            }
            if (state.index === 0 || state.routes.length === 1) {
                return state;
            }
            const newState = {...state, title: state.routes[state.index - 1].title};
            return NavigationStateUtils.pop(newState);
        }
        case actionTypes.RESET_ON_CURRENT_SCENE: {
            return NavigationStateUtils.reset(state, [state.routes[state.index]], 0);
        }
    }
    return state;
};