import {combineReducers} from 'redux';

import {reducer as app} from './app';
import {reducer as rootNavigator} from './rootNavigator';
import {cities} from './cities';
import {homeTabs} from './homeTabs';
import {pubs} from './pubs';


export const reducer = combineReducers({
    cities,
    app,
    rootNavigator,
    homeTabs,
    pubs,
});
