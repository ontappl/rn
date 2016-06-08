import { takeLatest } from 'redux-saga';
import { fork, put, call } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';
import * as api from './api';


export function* saga() {
    yield fork(cities);
}

function* cities() {
    yield fork(takeLatest, actionTypes.FETCH_CITIES_REQUEST, fetchCities);
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
