/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import Main from './src/Main';
import {Provider} from 'react-redux';
import reduxStore from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const {store,persistor} = reduxStore();

const ReduxWrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxWrapper);
