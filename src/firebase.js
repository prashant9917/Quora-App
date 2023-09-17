// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBuczkiRSVOGIvpj2DJGXXKtJeTvK9pazw",
  authDomain: "quora-app-cd28d.firebaseapp.com",
  projectId: "quora-app-cd28d",
  storageBucket: "quora-app-cd28d.appspot.com",
  messagingSenderId: "684812456824",
  appId: "1:684812456824:web:1c78539fec4d7b90ccee8d",
  measurementId: "G-V93C3ZR44C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;

