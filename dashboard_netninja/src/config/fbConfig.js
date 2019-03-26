// Initialize Firebase
var config = {
  apiKey: "AIzaSyBLGtnj2tuQjaz1FScWCYP029bI-MWxQNA",
  authDomain: "net-ninja-marioplan-c51d0.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-c51d0.firebaseio.com",
  projectId: "net-ninja-marioplan-c51d0",
  storageBucket: "net-ninja-marioplan-c51d0.appspot.com",
  messagingSenderId: "268683644110"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsINSnapshots: true });

export default firebase;
