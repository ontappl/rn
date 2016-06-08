import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

import {reducer} from './reducer';
import {saga} from './saga';


export function configureStore() {
    const sagaMiddleWare = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
    sagaMiddleWare.run(saga);
    return store;
}
