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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// always trigger the google popup whenever we use GoogleAuthProvider for authentication and signIn
provider.setCustomParameters({prompt: 'select_account'}); 

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;