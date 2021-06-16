import {User} from '@react-native-community/google-signin';
import {Dispatch} from 'redux';
import {Place} from 'google.maps';

import * as Google from 'src/lib/google';

// Thunk actions
export function getSearchResults(text: String) {
  return async (dispatch: Dispatch) => {
    try {
      const places = await Google.searchPlaces(text);
      dispatch(setSearchResults(places));
    } catch (error) {
      console.log({error});
    }
  };
}

// Action creators
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export function setSearchResults(searchResults: Place[]) {
  return {
    type: SET_SEARCH_RESULTS,
    searchResults,
  };
}

type PlacesAction = ReturnType<typeof setSearchResults>;

// Reducer
const initialState = {
  searchResults: [] as Place[],
};

export default function reducer(state = initialState, action: PlacesAction) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults,
      };
    default:
      return state;
  }
}
