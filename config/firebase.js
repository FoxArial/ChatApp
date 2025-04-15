import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.manifest2.extra.apiKey,
  authDomain: Constants.expomanifest2Config.extra.authDomain,
  projectId: Constants.manifest2.extra.projectId,
  storageBucket: Constants.manifest2.extra.storageBucket,
  messagingSenderId: Constants.manifest2.extra.messagingSenderId,
  appId: Constants.manifest2.extra.appId,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let auth;

if (getApps().length === 0) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  auth = getAuth(app);
}

const database = getFirestore(app);
console.log("API KEY:", firebaseConfig.apiKey);

const userRef = collection(database, 'users');
const roomRef = collection(database, 'rooms');

export { auth, database, userRef, roomRef };
