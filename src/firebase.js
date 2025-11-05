/**
 * Firebase Configuration for Timeline App
 * Client-side Firebase setup (NO SECRETS)
 */

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDl6HjloKSeSo_mfsYSxVbGibCHaC8EJdk",
  authDomain: "zoskycube-bossbattle.firebaseapp.com",
  projectId: "zoskycube-bossbattle",
  storageBucket: "zoskycube-bossbattle.firebasestorage.app",
  messagingSenderId: "592683947591",
  appId: "1:592683947591:web:06c2d76ececacaa845c362",
  measurementId: "G-GHBDWD8R0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)

// Initialize Firestore
export const db = getFirestore(app)

export default app
