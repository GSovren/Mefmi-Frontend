// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "mefmi-auth.firebaseapp.com",
  projectId: "mefmi-auth",
  storageBucket: "mefmi-auth.firebasestorage.app",
  messagingSenderId: "855254845104",
  appId: "1:855254845104:web:95d66800e67667db5a9d75",
  measurementId: "G-R2HL6X23GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };