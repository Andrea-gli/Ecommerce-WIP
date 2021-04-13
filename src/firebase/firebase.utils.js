import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDDW849TjR50ya--W0iimvnrKtxPNd4gFQ',
  authDomain: 'ecommerce-326de.firebaseapp.com',
  projectId: 'ecommerce-326de',
  storageBucket: 'ecommerce-326de.appspot.com',
  messagingSenderId: '502920957411',
  appId: '1:502920957411:web:5698f4515b9a0b220024d6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
