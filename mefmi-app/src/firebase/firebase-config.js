// Firebase Configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAUhmuh01KfvBYVy71fC8mPVouYX5Q4gCM",
    authDomain: "mefmi-debt-management.firebaseapp.com",
    projectId: "mefmi-debt-management",
    storageBucket: "mefmi-debt-management.firebasestorage.app",
    messagingSenderId: "930877940124",
    appId: "1:930877940124:web:e0720c3e408e97aea5a859",
    measurementId: "G-HJBZWWMC0H"
  };

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Configure Google OAuth scopes
googleProvider.addScope('email');
googleProvider.addScope('profile');