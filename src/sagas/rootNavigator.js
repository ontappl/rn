import { takeLatest, } from 'redux-saga';
import { fork, put, } from 'redux-saga/effects';

import * as appActionTypes from '../actionTypes/app';
import * as onboardingActionTypes from '../actionTypes/onboarding';
import * as rootNavigatorActions from '../actions/rootNavigator';
import * as pubsActionTypes from '../actionTypes/pubs';
import * as rootNavigatorKeys from '../rootNavigatorKeys';


export function* saga() {
  yield fork(takeLatest, appActionTypes.SHOW_OPTIONS, pushOptionsScene);
  yield fork(takeLatest, onboardingActionTypes.SELECT_CITY, pushHomeScene);
  yield fork(takeLatest, pubsActionTypes.SELECT_PUB, pushPubScene);
}

function* pushOptionsScene() {
  yield put(rootNavigatorActions.push(rootNavigatorKeys.OPTIONS));
}

function* pushHomeScene() {
  yield put(rootNavigatorActions.push(rootNavigatorKeys.HOME));
}

function* pushPubScene(action) {
  const navigationState = {
    key: rootNavigatorKeys.PUB,
    pubId: action.id,
    pubName: action.name,
  };
  yield put(rootNavigatorActions.push(navigationState));
}
