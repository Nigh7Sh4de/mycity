import {ActionFromReducer, combineReducers} from 'redux';

import users from 'src/redux/users';
import places from 'src/redux/places';

export const rootReducer = combineReducers({
  users,
  places,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootActions = ActionFromReducer<typeof rootReducer>;
