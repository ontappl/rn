import { takeLatest } from 'redux-saga';
import { fork, put, call } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';
import * as api from './api';

import {saga as rootNavigator} from './sagas/rootNavigator';

export function* saga() {
    yield fork(rootNavigator);
    yield fork(cities);
}

function* cities() {
    yield fork(takeLatest, actionTypes.FETCH_CITIES_REQUEST, fetchCities);
    yield fork(takeLatest, actionTypes.FETCH_PUBS_REQUEST, fetchPubs);
    yield fork(takeLatest, actionTypes.FETCH_TAPS_REQUEST, fetchTaps);
}

function* fetchCities() {
    try {
        const cities = yield call(api.fetchCities);
        yield put(actions.fetchCitiesSuccess(cities));
    } catch (error) {
        console.error(error);
        yield put(actions.fetchCitiesFailure(error));
    }
}

function* fetchPubs(action) {
    try {
        const pubs = yield call(api.fetchPubs, action.cityId);
        yield put(actions.fetchPubsSuccess(action.cityId, pubs));
    } catch (error) {
        console.error(error);
        yield put(actions.fetchPubsFailure(error));
    }
}

function* fetchTaps(action) {
    try {
        const taps = yield call(api.fetchTaps, action.pubId);
        yield put(actions.fetchTapsSuccess(action.pubId, taps));
    } catch (error) {
        console.error(error);
        yield put(actions.fetchTapsFailure(error));
    }
}
