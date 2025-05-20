// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3SY3nyviNawkFqcE7DhkZ0rHoLDDywB4",
  authDomain: "xtremekits-922a8.firebaseapp.com",
  projectId: "xtremekits-922a8",
  storageBucket: "xtremekits-922a8.firebasestorage.app",
  messagingSenderId: "1026820002278",
  appId: "1:1026820002278:web:6ee0e2c1e162fc44bd8627",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
