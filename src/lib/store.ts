import {createStore, applyMiddleware, compose} from 'redux';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';
import {rootReducer, RootState, RootActions} from 'src/redux';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'mycity',
  storage: AsyncStorage,
};

export const store = createStore(
  persistReducer<RootState, RootActions>(persistConfig, rootReducer),
  compose(
    reduxFirestore(firestore),
    applyMiddleware(Thunk.withExtraArgument({getFirestore}), Logger),
  ),
);
store.firestore.setListeners([{collection: 'pins'}]);
store.firestore.get('pins');

export const persistor = persistStore(store as any);
