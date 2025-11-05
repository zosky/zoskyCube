/**
 * Firebase Configuration for Timeline App
 * Client-side Firebase setup (NO SECRETS)
 */

import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDl6HjloKSeSo_mfsYSxVbGibCHaC8EJdk",
  authDomain: "zoskycube-bossbattle.firebaseapp.com",
  projectId: "zoskycube-bossbattle",
  storageBucket: "zoskycube-bossbattle.firebasestorage.app",
  messagingSenderId: "592683947591",
  appId: "1:592683947591:web:06c2d76ececacaa845c362"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// Connect to emulators in development
if (import.meta.env.DEV) {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
  connectFirestoreEmulator(db, 'localhost', 8080)
}

export { auth, db, app }
