import {takeLatest,} from 'redux-saga';
import {fork, put, call,} from 'redux-saga/effects';
import PushNotification from 'react-native-push-notification';

import {config,} from '../../.config';
import * as actions from '../actions/pushNotifications';
import * as actionTypes from '../actionTypes/pushNotifications';
import * as api from '../api';
import {logError,} from '../logger';
import * as pubActions from '../actions/pubs';


export function* saga() {
  yield fork(init);
  yield fork(takeLatest, actionTypes.HANDLE_TOKEN, sendToken);
}

export function* init() {
  const channel = createChannel();

  PushNotification.configure({
    senderID: config.androidSenderId,

    onRegister: function (token) {
      console.warn('Received token: ' + JSON.stringify(token)); // eslint-disable-line no-console
      channel.put(actions.handleToken(token.token));
    },

    onNotification: function (notification) {
      console.warn('Received notification: ' + JSON.stringify(notification)); // eslint-disable-line no-console

      if (notification.foreground === false && notification.userInteraction === true) {
        const action = translateNotificationToAction(notification);
        if (action) {
          channel.put(action);
        }
      }
    },
  });

  while (true) { // eslint-disable-line no-constant-condition
    const action = yield call(channel.take);
    yield put(action);
  }
}

function createChannel() {
  const messageQueue = [];
  const resolveQueue = [];

  function put(message) {
    if (resolveQueue.length) {
      const nextResolve = resolveQueue.shift();
      nextResolve(message);
    } else {
      messageQueue.push(message);
    }
  }

  function take() {
    if (messageQueue.length) {
      return Promise.resolve(messageQueue.shift());
    } else {
      return new Promise((resolve) => resolveQueue.push(resolve));
    }
  }

  return {put, take,};
}

const TAP_UPDATE = 'TAP_UPDATE';

function translateNotificationToAction(notification) {
  switch (notification.type) {
  case TAP_UPDATE:
    return pubActions.selectPub(notification.pubId, notification.pubName);
  }
}

function* sendToken({token,}) {
  yield put(actions.sendTokenRequest(token));
  try {
    const token = yield call(api.sendToken, token);
    yield put(actions.sendTokenSuccess(token));
  } catch (error) {
    logError(error);
    yield put(actions.sendTokenFailure(error));
  }
}
