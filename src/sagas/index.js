import {fork} from 'redux-saga/effects';

import {saga as rootNavigator} from './rootNavigator';
import {cities} from './cities';
import {pubs} from './pubs';


export function* saga() {
    yield fork(rootNavigator);
    yield fork(cities);
    yield fork(pubs);
}
