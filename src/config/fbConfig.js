import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMrg-ib8Yw_wi7bGzr6lwkRFqHo8-511Y",
    authDomain: "pensieve-blog.firebaseapp.com",
    databaseURL: "https://pensieve-blog.firebaseio.com",
    projectId: "pensieve-blog",
    storageBucket: "pensieve-blog.appspot.com",
    messagingSenderId: "3602018572"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;