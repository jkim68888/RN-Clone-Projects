// Import the functions you need from the SDKs you need
import { getFireSotre, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC3u0Mb2lWYp85t5pPwKAhYU_wWjVZecAQ',
  authDomain: 'rn-instagram-clone-daa64.firebaseapp.com',
  projectId: 'rn-instagram-clone-daa64',
  storageBucket: 'rn-instagram-clone-daa64.appspot.com',
  messagingSenderId: '56039805945',
  appId: '1:56039805945:web:46fad0ac87bced28ef6328',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }
