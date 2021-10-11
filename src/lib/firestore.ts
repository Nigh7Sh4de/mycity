import {firebase} from '@react-native-firebase/firestore';

export async function getPins(idList: string[]) {
  return Promise.all(idList.map(getPin));
}

export async function getPin(id: string) {
  return firebase.firestore().collection('pins').doc(id).get();
}

export async function setPin(id: string, pinned: boolean) {
  await firebase.firestore().collection('pins').doc(id).set({pinned});
}
