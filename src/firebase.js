import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDK7RBpVdSkYK4v8Q4zxESYj4uWfI3SHeI",
    authDomain: "slack-clone-e1627.firebaseapp.com",
    databaseURL: "https://slack-clone-e1627.firebaseio.com",
    projectId: "slack-clone-e1627",
    storageBucket: "slack-clone-e1627.appspot.com",
    messagingSenderId: "234688030863",
    appId: "1:234688030863:web:212ec46ca7051a54e5e8fa",
    measurementId: "G-YKVS5GDH97"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

