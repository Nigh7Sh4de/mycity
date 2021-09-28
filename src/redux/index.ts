import {ActionFromReducer, combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';

import users from 'src/redux/users';
import places from 'src/redux/places';

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  users,
  places,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootActions = ActionFromReducer<typeof rootReducer>;
