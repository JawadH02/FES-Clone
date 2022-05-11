// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAodbudo7EmZlXYbG7N8rJhEKhXBesSAHo',
  authDomain: 'fes-clone.firebaseapp.com',
  projectId: 'fes-clone',
  storageBucket: 'fes-clone.appspot.com',
  messagingSenderId: '564662661117',
  appId: '1:564662661117:web:a6393b927cf009c1153394',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
