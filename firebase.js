import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNBevClgnlb5x9lapZMTCNu4LZI4uWQsA",
  authDomain: "next-clone-1c53b.firebaseapp.com",
  projectId: "next-clone-1c53b",
  storageBucket: "next-clone-1c53b.appspot.com",
  messagingSenderId: "714907072300",
  appId: "1:714907072300:web:407dd4ede16ea56a0ede89",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
