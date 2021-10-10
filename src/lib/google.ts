import {GoogleSignin} from '@react-native-community/google-signin';
import {Dimensions} from 'react-native';
import {Place} from 'google.maps';

// Auth functions
export async function configure() {
  await GoogleSignin.configure({
    webClientId:
      '449150167275-n0stlelrifs5fv80lpjfbkr8lvpk8llf.apps.googleusercontent.com',
    offlineAccess: true,
  });
}

export async function signInSilently() {
  await GoogleSignin.hasPlayServices();
  return await GoogleSignin.signInSilently();
}

export async function signIn() {
  await GoogleSignin.hasPlayServices();
  return await GoogleSignin.signIn();
}

// Place API
const {width, height} = Dimensions.get('window');
export const ASPECT_RATIO = width / height;
export const LATITUDE = 37.75987;
export const LONGITUDE = -122.4204;
export const LATITUDE_DELTA = 0.0522;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export const SEARCH_RADIUS = Math.max(LATITUDE_DELTA, LONGITUDE_DELTA) * 111000;

export async function searchPlaces(text: String): Promise<Place[]> {
  const {accessToken} = await GoogleSignin.getTokens();
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCEUtOBQNpEMlOFH7bbo5sE0xmQxx8V1Fo&location=${LATITUDE},${LONGITUDE}&radius=${SEARCH_RADIUS}&query=${text}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  const body = await response.json();
  if (body.results) return body.results;
  else throw body;
}
