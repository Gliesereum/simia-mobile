/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {
  StyleSheet,
} from 'react-native';

import rootReducer from './redusers';
import watcherSaga from './sagas';

import StreamActionPanel from './components/StreamActionPanel';
import { Routes } from './navigation/Route';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      {/*<View style={styles.container}>*/}
      {/*  <ScrollView*/}
      {/*    contentInsetAdjustmentBehavior="automatic"*/}
      {/*    style={styles.contentContainer}>*/}
      {/*  </ScrollView>*/}
      {/*  <StreamActionPanel />*/}
      {/*</View>*/}
      <Routes />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  }
});

export default App;
