import {ActionFromReducer, combineReducers} from 'redux';

import users from 'src/redux/users';

export const rootReducer = combineReducers({
  users,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootActions = ActionFromReducer<typeof rootReducer>;
