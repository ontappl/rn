import {takeLatest} from 'redux-saga';
import {fork, put, call} from 'redux-saga/effects';
import PushNotification from 'react-native-push-notification';
import DeviceInfo from 'react-native-device-info';

import {config} from '../../.config';
import * as actions from '../actions/pushNotifications';
import * as actionTypes from '../actionTypes/pushNotifications';
import * as api from '../api';
import {logError} from '../logger';


export function* saga() {
    yield fork(init);
    yield fork(takeLatest, actionTypes.RECEIVE_TOKEN, sendToken);
}

export function* init() {
    const channel = createChannel();

    PushNotification.configure({
        senderID: config.androidSenderId,

        onRegister: function (token) {
            console.warn('Received token: ' + JSON.stringify(token));
            channel.put(actions.receiveToken(token.token));
        },

        onNotification: function (notification) {
            console.warn('Received notification: ' + JSON.stringify(notification));
            // PushNotification.localNotificationSchedule({
            //     message: "My Notification Message", // (required)
            //     date: new Date(Date.now() + (10 * 1000)) // in 60 secs
            // });
        },
    });

    while (true) {
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

    return {put, take};
}

function* sendToken(action) {
    try {
        const deviceId = DeviceInfo.getUniqueID();
        const token = yield call(api.sendToken, action.token, deviceId);
        yield put(actions.sendTokenSuccess(token));
    } catch (error) {
        logError(error);
        yield put(actions.sendTokenSuccess(error));
    }
}