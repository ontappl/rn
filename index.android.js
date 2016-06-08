import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import {configureStore} from './src/configureStore';
import {Root} from './src/components/root';


const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Root/>
    </Provider>
);

AppRegistry.registerComponent('ontaprn', () => App);
