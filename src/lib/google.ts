import {GoogleSignin} from '@react-native-community/google-signin';

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
