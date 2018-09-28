import firebase from "firebase";
require('firebase/auth');

const config = {
    apiKey: "YOUR DATA",
    authDomain: "YOUR DATA",
    databaseURL: "YOUR DATA",
    projectId: "YOUR DATA",
    storageBucket: "YOUR DATA",
    messagingSenderId: "YOUR DATA"
};

const firebaseApp = firebase.initializeApp(config);
export const firebaseAuth = firebaseApp.auth();