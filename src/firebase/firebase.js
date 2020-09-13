import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCiWbLQFP9FC4YGYfhk07XgK5OqBbI5fok",
  authDomain: "clone-3d29e.firebaseapp.com",
  databaseURL: "https://clone-3d29e.firebaseio.com",
  projectId: "clone-3d29e",
  storageBucket: "clone-3d29e.appspot.com",
  messagingSenderId: "927329471000",
  appId: "1:927329471000:web:1ded5d40fffa8ad7fa516d",
  measurementId: "G-8Q36GGKWRW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
