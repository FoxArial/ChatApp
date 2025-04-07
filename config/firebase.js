import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "Constants.manifest2.extra.ApiKey",
  authDomain: "Constants.manifest2.extra.authDomain",
  projectId: "Constants.manifest2.extra.projectId",
  storageBucket: "Constants.manifest2.extra.storageBucket",
  messagingSenderId: "Constants.manifest2.extra.messagingSenderId",
  appId: "Constants.manifest2.extra.appId",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database = getFirestore();
