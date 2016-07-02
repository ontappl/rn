import { takeLatest } from 'redux-saga';
import { fork, put, call } from 'redux-saga/effects';

import * as onboardingActionTypes from '../actionTypes2/onboarding';
import * as rootNavigatorActions from '../actions2/rootNavigator';
import * as rootNavigatorKeys from '../rootNavigatorKeys';


export function* saga() {
    yield fork(takeLatest, onboardingActionTypes.SELECT_CITY, pushHomeScene);
}

function* pushHomeScene() {
    console.log('pushHomeScene');
    yield put(rootNavigatorActions.push(rootNavigatorKeys.HOME));
}
