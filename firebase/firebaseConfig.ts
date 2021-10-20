import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMe7LGPSa0GFyqfOuvMXhNhEY45IzWx58",
    authDomain: "ec-next.firebaseapp.com",
    projectId: "ec-next",
    storageBucket: "ec-next.appspot.com",
    messagingSenderId: "173383077266",
    appId: "1:173383077266:web:122f71614dcb95d100454b",
    measurementId: "G-J0R7GPPPNX"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase