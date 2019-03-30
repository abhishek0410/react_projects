import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var fbConfig = {
  apiKey: "AIzaSyBLGtnj2tuQjaz1FScWCYP029bI-MWxQNA",
  authDomain: "net-ninja-marioplan-c51d0.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-c51d0.firebaseio.com",
  projectId: "net-ninja-marioplan-c51d0",
  storageBucket: "net-ninja-marioplan-c51d0.appspot.com",
  messagingSenderId: "268683644110"
};
firebase.initializeApp(fbConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
