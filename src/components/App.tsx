/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { NativeRouter as Router, Switch, Route } from 'react-router-native'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux'
import Logger from 'redux-logger'
import Thunk from 'redux-thunk'
import reducers from 'src/redux';

const persistConfig = {
  key: 'mycity',
  storage: AsyncStorage,
  blacklist: ['firestore'],
}

const store = createStore(
  persistReducer(persistConfig, reducers),
  applyMiddleware(Thunk, Logger)
)
const persistor = persistStore(store)

declare const global: {HermesInternal: null | {}};

const helloWorld = () => {
  return (
    <View>
      <Text>Hello World :D</Text>
    </View>
  )
};

const App = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={{ flex: 1 }}>
            <Router>
              <View style={{ flex: 1 }}>
                <Route path="/" render={helloWorld} />
              </View>
            </Router>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
