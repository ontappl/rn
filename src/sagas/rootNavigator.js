import { takeLatest } from 'redux-saga';
import { fork, put, call } from 'redux-saga/effects';

import * as onboardingActionTypes from '../actionTypes/onboarding';
import * as rootNavigatorActions from '../actions/rootNavigator';
import * as pubsActionTypes from '../actionTypes/pubs';
import * as rootNavigatorKeys from '../rootNavigatorKeys';


export function* saga() {
    yield fork(takeLatest, onboardingActionTypes.SELECT_CITY, pushHomeScene);
    yield fork(takeLatest, pubsActionTypes.SELECT_PUB, pushPubScene);
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
