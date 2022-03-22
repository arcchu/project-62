import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvI3zmIdf3jK6m2ZdySbFou4RTcgsM4GA",
  authDomain: "school-attendance-3d816.firebaseapp.com",
  databaseURL: "https://school-attendance-3d816-default-rtdb.firebaseio.com",
  projectId: "school-attendance-3d816",
  storageBucket: "school-attendance-3d816.appspot.com",
  messagingSenderId: "828878399997",
  appId: "1:828878399997:web:579e04a4351c4d6d855194",
  measurementId: "G-P864HV175D"
};
 firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  