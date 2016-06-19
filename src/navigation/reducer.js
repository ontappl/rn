import {BackAndroid} from 'react-native';
import * as NavigationStateUtils from 'NavigationStateUtils';

import * as actionTypes from './actionTypes';


const initialState = {
    index: 0,
    routes: [
        {key: 'cities', title: 'Miasta'},
    ],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case '@@redux/INIT': {
            return {...state, title: state.routes[0].title};
        }
        case actionTypes.PUSH: {
            if (state.routes[state.index].key === (action.newState && action.newState.key)) {
                return state;
            }
            const newState = {...state, title: action.newState.title};
            return NavigationStateUtils.push(newState, action.newState);
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
    }
    return state;
};