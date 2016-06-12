import * as NavigationStateUtils from 'NavigationStateUtils';
import * as actionTypes from './actionTypes';


const initialState = {
    index: 0,
    routes: [
        {key: 'cities', title: 'cities'},
    ],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUSH:
            if (state.routes[state.index].key === (action.newState && action.newState.key)) return state;
            return NavigationStateUtils.push(state, action.newState);
        case actionTypes.POP:
            return (state.index === 0 || state.routes.length === 1) ? state : NavigationStateUtils.pop(state);
    }
    return state;
};