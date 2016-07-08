import {BackAndroid} from 'react-native';
import * as NavigationStateUtils from 'NavigationStateUtils';
import { LOAD } from 'redux-storage';

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
        case LOAD: {
            const alreadySelectedCity = action.payload.app && !!action.payload.app.selectedCity;
            if (alreadySelectedCity) {
                return {
                    ...state,
                    routes: [
                        {key: rootNavigatorKeys.HOME},
                    ],
                };
            } else {
                return state;
            }
        }
        case actionTypes.PUSH: {
            return NavigationStateUtils.push(state, action.newState);
        }
        case actionTypes.POP: {
            if (state.index === 0 && action.source === 'BackAndroid') {
                BackAndroid.exitApp();
                return state;
            }
            return NavigationStateUtils.pop(state);
        }
        case actionTypes.RESET_ON_CURRENT_SCENE: {
            return NavigationStateUtils.reset(state, [state.routes[state.index]], 0);
        }
    }
    return state;
};