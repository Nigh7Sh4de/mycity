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
      dispatch(setSearchResults(mergedData));
    } catch (error) {
      console.log({error});
    }
  };
}

export function setPin(place_id: string, pinned: boolean = true) {
  return async (dispatch: Dispatch) => {
    Firestore.setPin(place_id, pinned);
    dispatch(
      updateResult({
        place_id,
        pinned,
      }),
    );
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
type setSearchResultsAction = ReturnType<typeof setSearchResults>;

export const UPDATE_RESULT = 'UPDATE_RESULT';
export function updateResult(place: Place) {
  return {
    type: UPDATE_RESULT,
    place,
  };
}
type updateResultAction = ReturnType<typeof updateResult>;

// Reducer
const initialState = {
  searchResults: [] as Place[],
};

type PlacesAction = setSearchResultsAction & updateResultAction;

export default function reducer(state = initialState, action: PlacesAction) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults,
      };
    case UPDATE_RESULT:
      return {
        ...state,
        searchResults: state.searchResults.map((place: Place) =>
          place.place_id === action.place.place_id
            ? {...place, ...action.place}
            : place,
        ),
      };
    default:
      return state;
  }
}
