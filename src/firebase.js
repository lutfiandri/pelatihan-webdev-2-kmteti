// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyByArGE07TJJiK3H93e4eLTmjQGoL8iWu4',
  authDomain: 'todoappkmteti.firebaseapp.com',
  projectId: 'todoappkmteti',
  storageBucket: 'todoappkmteti.appspot.com',
  messagingSenderId: '193762815746',
  appId: '1:193762815746:web:2d585d3e51fd23ccb1dc1b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
