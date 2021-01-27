import {User} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {Dispatch} from 'redux';

import * as Google from 'src/lib/google';

// Thunk actions
export function initialize() {
  return async () => {
    try {
      await Google.configure();
    } catch (error) {
      console.log({error});
    }
  };
}

export function signIn() {
  return async (dispatch: Dispatch) => {
    try {
      const user = await Google.signIn();
      console.log({user});
      const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
      auth().signInWithCredential(googleCredential);
      dispatch(setUser(user));
    } catch (error) {
      console.log({error});
    }
  };
}

export function signInSilently() {
  return async (dispatch: Dispatch) => {
    try {
      const user = await Google.signInSilently();
      const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
      await auth().signInWithCredential(googleCredential);
      dispatch(setUser(user));
    } catch (error) {
      console.log({error});
    }
  };
}

// Action creators
export const SET_USER = 'SET_USER';

export function setUser(user: User) {
  return {
    type: SET_USER,
    user,
  };
}

type UserAction = ReturnType<typeof setUser>;

// Reducer
const initialState = {
  data: {} as User,
};

export default function reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.user,
      };
    default:
      return state;
  }
}
