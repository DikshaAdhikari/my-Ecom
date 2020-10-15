import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyAUb7MGZgCfe2Huid6gCUl9g1rVRRxI2b0",
    authDomain: "ecom-db-3f94c.firebaseapp.com",
    databaseURL: "https://ecom-db-3f94c.firebaseio.com",
    projectId: "ecom-db-3f94c",
    storageBucket: "ecom-db-3f94c.appspot.com",
    messagingSenderId: "511001836409",
    appId: "1:511001836409:web:e0c4e99c664a31b0288da8",
    measurementId: "G-MG4BXEX4NM"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;