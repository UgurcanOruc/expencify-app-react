import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa56WBdfo-g4OumSvl9tXXt2igu9kByGw",
  authDomain: "expensify-app-78188.firebaseapp.com",
  projectId: "expensify-app-78188",
  storageBucket: "expensify-app-78188.appspot.com",
  messagingSenderId: "1029998953201",
  appId: "1:1029998953201:web:46abbdcfb81b611a671f50",
  measurementId: "G-C4Z9KD7MCM"
};
const firebaseApp = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider();

export const Db = getFirestore(firebaseApp);
