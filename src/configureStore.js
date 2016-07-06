import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import {reducer} from './reducers';
import {saga} from './sagas';
import {middleware as analyticsMiddleware} from './analytics';


export function configureStore() {
    const sagaMiddleWare = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(analyticsMiddleware, sagaMiddleWare));
    sagaMiddleWare.run(saga);
    return store;
}
