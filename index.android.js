import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import {initCrashlytics} from './src/analytics';
import {configureStore} from './src/configureStore';
import {Root} from './src/components/Root';


initCrashlytics();
const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Root/>
    </Provider>
);

AppRegistry.registerComponent('ontaprn', () => App);
