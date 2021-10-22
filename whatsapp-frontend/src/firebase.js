import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAI9euXBXH-JzBUcExkgCpNG96gowZWYjA",
  authDomain: "whatsapp-mern-567d6.firebaseapp.com",
  projectId: "whatsapp-mern-567d6",
  storageBucket: "whatsapp-mern-567d6.appspot.com",
  messagingSenderId: "865312942681",
  appId: "1:865312942681:web:6260cc9dad1b7cef5a5f48",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, storage, auth };
