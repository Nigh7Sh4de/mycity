import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NativeRouter as Router, Switch, Route} from 'react-router-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from 'src/lib/store';
import RedirectGate from 'src/components/login/RedirectGate';
import Login from 'src/components/login';
import Map from 'src/components/map';

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
