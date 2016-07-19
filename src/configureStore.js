import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import * as storage from 'redux-storage';
import createStorageEngine from 'redux-storage-engine-reactnativeasyncstorage';
import filter from 'redux-storage-decorator-filter'

import {reducer} from './reducers';
import {saga} from './sagas';
import {middleware as analyticsMiddleware} from './analytics';

import * as citiesActionTypes from './actionTypes/cites';
import * as pubsActionTypes from './actionTypes/pubs';
import * as rootNavigatorActionTypes from './actionTypes/rootNavigator';


const actionBlackList = [
    citiesActionTypes.FETCH_CITIES_REQUEST,
    citiesActionTypes.FETCH_CITIES_FAILURE,
    pubsActionTypes.FETCH_PUBS_REQUEST,
    pubsActionTypes.FETCH_PUBS_FAILURE,
    pubsActionTypes.FETCH_TAPS_REQUEST,
    pubsActionTypes.FETCH_TAPS_FAILURE,
    rootNavigatorActionTypes.PUSH,
    rootNavigatorActionTypes.POP,
];

const storageEngine = createStorageEngine('persistent-storage');
const filteredEngine = filter(
    storageEngine,
    ['app', 'entities'],
);

const storageMiddleware = storage.createMiddleware(filteredEngine, actionBlackList);

export function configureStore() {
    const sagaMiddleWare = createSagaMiddleware();
    const store = createStore(
        storage.reducer(reducer),
        applyMiddleware(analyticsMiddleware, sagaMiddleWare, storageMiddleware)
    );
    sagaMiddleWare.run(saga);
    return store;
}
