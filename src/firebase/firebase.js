import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAjee7ZTzPL9o7jQrYZ_-oLXIAOOFokuBU",
    authDomain: "clone-efa3d.firebaseapp.com",
    projectId: "clone-efa3d",
    storageBucket: "clone-efa3d.appspot.com",
    messagingSenderId: "221810933255",
    appId: "1:221810933255:web:596a8ef1fa7c74e41674a2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);   

const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();
const timestamp= firebase.firestore.FieldValue.serverTimestamp();

export { db, provider, auth, storage,timestamp};