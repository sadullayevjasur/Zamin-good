import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8z86CNH3iKVdcbMcoixnBZ0J1Vrymgns",
  authDomain: "burger-528de.firebaseapp.com",
  projectId: "burger-528de",
  storageBucket: "burger-528de.appspot.com",
  messagingSenderId: "1082414632933",
  appId: "1:1082414632933:web:ba1924d3496e5eedace90c",
  measurementId: "G-HD6B9X1GSR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);