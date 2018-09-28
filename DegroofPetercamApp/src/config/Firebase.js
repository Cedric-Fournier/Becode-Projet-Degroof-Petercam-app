import firebase from "firebase";
require('firebase/auth');

const config = {
    apiKey: "AIzaSyDv3Y8yHCatFh4umfqPE2FdwuZHFwjvCFc",
    authDomain: "dp-app-fe51e.firebaseapp.com",
    databaseURL: "https://dp-app-fe51e.firebaseio.com",
    projectId: "dp-app-fe51e",
    storageBucket: "dp-app-fe51e.appspot.com",
    messagingSenderId: "396599944025"
};

const firebaseApp = firebase.initializeApp(config);
export const firebaseAuth = firebaseApp.auth();