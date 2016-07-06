import { takeLatest } from 'redux-saga';
import { fork, put, call } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes/pubs';
import * as actions from '../actions/pubs';
import * as api from '../api';

export function* pubs() {
    yield fork(takeLatest, actionTypes.FETCH_PUBS_REQUEST, fetchPubs);
    yield fork(takeLatest, actionTypes.FETCH_TAPS_REQUEST, fetchTaps);
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
