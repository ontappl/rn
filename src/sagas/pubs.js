import {takeLatest,} from 'redux-saga';
import {fork, put, call, select,} from 'redux-saga/effects';

import {logError,} from '../logger';
import * as actionTypes from '../actionTypes/pubs';
import * as actions from '../actions/pubs';
import * as api from '../api';
import * as pubSelectors from '../selectors/pubs';


export function* pubs() {
  yield fork(takeLatest, actionTypes.FETCH_PUBS_REQUEST, fetchPubs);
  yield fork(takeLatest, actionTypes.FETCH_TAPS_REQUEST, fetchTaps);
  yield fork(takeLatest, actionTypes.TOGGLE_FAVORITE_PUB, sendFavoritedPubs);
}

function* fetchPubs(action) {
  try {
    const pubs = yield call(api.fetchPubs, action.cityId);
    yield put(actions.fetchPubsSuccess(action.cityId, pubs));
  } catch (error) {
    logError(error);
    yield put(actions.fetchPubsFailure(error));
  }
}

function* fetchTaps(action) {
  try {
    const taps = yield call(api.fetchTaps, action.pubId);
    yield put(actions.fetchTapsSuccess(action.pubId, taps));
  } catch (error) {
    logError(error);
    yield put(actions.fetchTapsFailure(error));
  }
}

function* sendFavoritedPubs() {
  const favouritedPubIds = yield select(pubSelectors.favorites);
  yield put(actions.sendFavoritedPubsRequest(favouritedPubIds));
  try {
    yield call(api.sendFavoritedPubs, favouritedPubIds);
    yield put(actions.sendFavoritedPubsSuccess());
  } catch (error) {
    logError(error);
    yield put(actions.sendFavoritedPubsFailure(error));
  }
}
