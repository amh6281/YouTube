import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAQ_LRpYyjLfiZ4nAcFOxYcaaCZ-5Gkw3g",
  authDomain: "fir-464a4.firebaseapp.com",
  projectId: "fir-464a4",
  storageBucket: "fir-464a4.appspot.com",
  messagingSenderId: "1004089551637",
  appId: "1:1004089551637:web:c6ca9dfb7ba5a54f9e171c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
