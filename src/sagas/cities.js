import {takeLatest} from 'redux-saga';
import {fork, put, call} from 'redux-saga/effects';

import {logError} from '../logger';
import * as actionTypes from '../actionTypes/cites';
import * as actions from '../actions/cities';
import * as api from '../api';


export function* cities() {
    yield fork(takeLatest, actionTypes.FETCH_CITIES_REQUEST, fetchCities);
}

function* fetchCities() {
    try {
        const cities = yield call(api.fetchCities);
        yield put(actions.fetchCitiesSuccess(cities));
    } catch (error) {
        logError(error);
        yield put(actions.fetchCitiesFailure(error));
    }
}
