import {Dispatch} from 'redux';
import {Place} from 'google.maps';

import * as Google from 'src/lib/google';
import * as Firestore from 'src/lib/firestore';
import {PinnedPlace} from 'src/lib/place';

// Thunk actions
export function getSearchResults(text: string) {
  return async (dispatch: Dispatch) => {
    try {
      const places = await Google.searchPlaces(text);
      const pins = await Firestore.getPins(
        places.map((p: Place) => p.place_id),
      );
      const mergedData = places.map(
        (place: Place, i: number) =>
          ({...place, pinned: pins[i].exists} as PinnedPlace),
      );
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
