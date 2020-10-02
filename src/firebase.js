import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyDRyfiP0bbi_J4S7cMaJmCM_pQaatItsT4",
  authDomain: "clone-7391b.firebaseapp.com",
  databaseURL: "https://clone-7391b.firebaseio.com",
  projectId: "clone-7391b",
  storageBucket: "clone-7391b.appspot.com",
  messagingSenderId: "443268471819",
  appId: "1:443268471819:web:9ba52fbc3dfd1cd3997b0e",
  measurementId: "G-N12PR7QS9L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 

export {db, auth}; 