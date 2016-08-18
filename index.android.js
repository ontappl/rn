import React from 'react';
import {AppRegistry,} from 'react-native';
import {Provider,} from 'react-redux';
import * as storage from 'redux-storage';
import createStorageEngine from 'redux-storage-engine-reactnativeasyncstorage';

import {initCrashlytics,} from './src/analytics';
import {configureStore,} from './src/configureStore';
import {RootNavigator,} from './src/containers';
import {SplashScreen,} from './src/components';


initCrashlytics();
const store = configureStore();

const storageEngine = createStorageEngine('persistent-storage');
const load = storage.createLoader(storageEngine);

class App extends React.Component {
  constructor() {
    super();
    this.state = {stateIsLoaded: false,};
  }

  componentDidMount() {
    load(store).then(() => this.setState({stateIsLoaded: true,}));
  }

  render() {
    if (!this.state.stateIsLoaded) {
      return <SplashScreen/>;
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
