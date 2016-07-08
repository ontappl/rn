import React from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import {Provider} from 'react-redux';
import * as storage from 'redux-storage';
import createStorageEngine from 'redux-storage-engine-reactnativeasyncstorage';

import {initCrashlytics} from './src/analytics';
import {configureStore} from './src/configureStore';
import {RootNavigator} from './src/containers';


initCrashlytics();
const store = configureStore();

const storageEngine = createStorageEngine('persistent-storage');
const load = storage.createLoader(storageEngine);

class App extends React.Component {
    constructor() {
        super();
        this.state = {stateIsLoaded: false};
    }

    componentDidMount() {
        load(store).then((state2) => this.setState({stateIsLoaded: true}));
    }

    render() {
        if (!this.state.stateIsLoaded) {
            return <Text>LOADING</Text>;
        } else {
            return (
                <Provider store={store}>
                    <RootNavigator/>
                </Provider>
            );
        }
    }
}

AppRegistry.registerComponent('ontaprn', () => App);
