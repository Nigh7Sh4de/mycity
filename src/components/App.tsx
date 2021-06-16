import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {NativeRouter as Router, Switch, Route} from 'react-router-native';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';

import {rootReducer, RootState, RootActions} from 'src/redux';
import RedirectGate from 'src/components/login/RedirectGate';
import Login from 'src/components/login';
import Map from 'src/components/map';

const persistConfig = {
  key: 'mycity',
  storage: AsyncStorage,
};

const store = createStore(
  persistReducer<RootState, RootActions>(persistConfig, rootReducer),
  applyMiddleware(Thunk, Logger),
);
const persistor = persistStore(store as any);

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={{flexGrow: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={{flex: 1}}>
            <Router>
              <View style={{flex: 1}}>
                <Route path="/" component={RedirectGate} />
                <Switch>
                  <Route exact path="/" component={Map} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </View>
            </Router>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
