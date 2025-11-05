// Firebase configuration for LOCAL EMULATOR
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTkO81igjNOO-lMGWPr4-FMc29-iFo4wc",
  authDomain: "zoskycube-bossbattle.firebaseapp.com",
  projectId: "zoskycube-bossbattle",
  storageBucket: "zoskycube-bossbattle.firebasestorage.app",
  messagingSenderId: "592683947591",
  appId: "1:592683947591:web:ef7e5e8b6e1e1d3b3d3d3d"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// Connect to emulators
connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
connectFirestoreEmulator(db, 'localhost', 8080)

export { auth, db, app }
