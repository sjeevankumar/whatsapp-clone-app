import firebase from "firebase";
// import firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4YaRwI13VJfLICNQaMuLhfwi2tbREeII",
  authDomain: "whats-app-clone-86435.firebaseapp.com",
  projectId: "whats-app-clone-86435",
  storageBucket: "whats-app-clone-86435.appspot.com",
  messagingSenderId: "962483221887",
  appId: "1:962483221887:web:55ec6d294508545ca1964a",
  measurementId: "G-DJEYD5JLK8"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;