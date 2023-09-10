import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLzhPE5TPL-fulZOC0f4VwW0iBNxNQ2c8",
    authDomain: "slack-clone-542dc.firebaseapp.com",
    projectId: "slack-clone-542dc",
    storageBucket: "slack-clone-542dc.appspot.com",
    messagingSenderId: "875345950969",
    appId: "1:875345950969:web:8b37db45a02bd01244ca28"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
