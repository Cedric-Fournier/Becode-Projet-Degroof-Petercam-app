import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDv3Y8yHCatFh4umfqPE2FdwuZHFwjvCFc",
    authDomain: "dp-app-fe51e.firebaseapp.com",
    databaseURL: "https://dp-app-fe51e.firebaseio.com",
    projectId: "dp-app-fe51e",
    storageBucket: "dp-app-fe51e.appspot.com",
    messagingSenderId: "396599944025"
};

export default class Firebase {
    static auth;

    static init() {
        firebase.initializeApp(config);
        Firebase.auth = firebase.auth();
    }
}