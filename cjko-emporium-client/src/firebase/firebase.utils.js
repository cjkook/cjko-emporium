import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB428yttv2R5phDr6w229CD8-k5dxiOtgk",
  authDomain: "emporium-db-38a72.firebaseapp.com",
  projectId: "emporium-db-38a72",
  storageBucket: "emporium-db-38a72.appspot.com",
  messagingSenderId: "372759642727",
  appId: "1:372759642727:web:4b9b11f23ff21ff1090ac2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;