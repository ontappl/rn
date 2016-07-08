import {combineReducers} from 'redux';

import {reducer as app} from './app';
import {reducer as rootNavigator} from './rootNavigator';
import {cities} from './cities';
import {homeTabs} from './homeTabs';
import {pubs} from './pubs';
import * as appActionsTypes from '../actionTypes/app';


const rootReducer = combineReducers({
    cities,
    app,
    rootNavigator,
    homeTabs,
    pubs,
});

export const reducer = (state, action) => {
    if (action.type === appActionsTypes.RESET) {
        state = undefined;
    }
    return rootReducer(state, action);
};
