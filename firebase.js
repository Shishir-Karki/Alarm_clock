// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7nAM1eAYNifyX54WZBPWkhY0i8EuIulg",
  authDomain: "alarm-2bae8.firebaseapp.com",
  projectId: "alarm-2bae8",
  storageBucket: "alarm-2bae8.appspot.com",
  messagingSenderId: "146974771967",
  appId: "1:146974771967:web:932de7fd9d5536f6afdaca",
  measurementId: "G-3KHETNESPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);