import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import * as storage from 'redux-storage';
import createStorageEngine from 'redux-storage-engine-reactnativeasyncstorage';

import {reducer} from './reducers';
import {saga} from './sagas';
import {middleware as analyticsMiddleware} from './analytics';
import * as onboardingActionTypes from './actionTypes/onboarding';


const actionWhitelist = [
    onboardingActionTypes.SELECT_CITY,
];

const storageEngine = createStorageEngine('persistent-storage');
const storageMiddleware = storage.createMiddleware(storageEngine, [], actionWhitelist);

export function configureStore() {
    const sagaMiddleWare = createSagaMiddleware();
    const store = createStore(
        storage.reducer(reducer),
        applyMiddleware(analyticsMiddleware, sagaMiddleWare, storageMiddleware)
    );
    sagaMiddleWare.run(saga);
    return store;
}
