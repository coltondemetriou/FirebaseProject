import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA1XYwBfFMgN1XJAiEmCzW1ACklhK9Ug6Y",
    authDomain: "example-firebase-e2b66.firebaseapp.com",
    databaseURL: "https://example-firebase-e2b66.firebaseio.com",
    projectId: "example-firebase-e2b66",
    storageBucket: "example-firebase-e2b66.appspot.com",
    messagingSenderId: "960778465775",
    appId: "1:960778465775:web:89425e8ddd7fd97a"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;