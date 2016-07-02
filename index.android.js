import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import {initCrashlytics} from './src/analytics';
import {configureStore} from './src/configureStore';
import {Root} from './src/components/Root';
import {RootNavigator} from './src/containers';


initCrashlytics();
const store = configureStore();

const App = () => (
    <Provider store={store}>
        <RootNavigator/>
    </Provider>
);

AppRegistry.registerComponent('ontaprn', () => App);
