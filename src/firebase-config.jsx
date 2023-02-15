// Ce fichier sert à utiliser FIREBASE
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Cette constante sert à utiliser le fichier .env.local pour masquer les données
// et pour ne pas les envoyer sur github, car .env.local est dans le .gitignore

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);