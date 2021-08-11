import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC4kYaWZ9pAdMa-7gSh8_M7EIY3rHqo_Hs",

    authDomain: "sitio-integra.firebaseapp.com",

    projectId: "sitio-integra",

    storageBucket: "sitio-integra.appspot.com",

    messagingSenderId: "114999073712",

    appId: "1:114999073712:web:eeeea5d06d218635619475"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };