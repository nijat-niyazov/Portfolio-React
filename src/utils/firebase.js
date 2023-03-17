import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// const dotenv = require('dotenv');
// dotenv.config();

const firebaseConfig = {
  apiKey: 'AIzaSyBHv2PNUSQHRNKp0LDM5Qml33CKpNLtHTY',
  authDomain: 'portfolio-firebase-pr.firebaseapp.com',
  projectId: 'portfolio-firebase-pr',
  storageBucket: 'portfolio-firebase-pr.appspot.com',
  messagingSenderId: '567277042282',
  appId: '1:567277042282:web:c29663f779a4075db22813',
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
// our storage for media files

export const database = getFirestore(app);
// our database for documents

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOut = () => auth.signOut();

// apiKey: process.env.PORTFOLIO_API_KEY,
// authDomain: process.env.PORTFOLIO_AUTH_DOMAIN,
// projectId: process.env.PORTFOLIO_PROJECT_ID,
// storageBucket: process.env.PORTFOLIO_STORAGE_BUCKET,
// messagingSenderId: process.env.PORTFOLIO_MESSAGING_SENDER_ID,
// appId: process.env.PORTFOLIO_APP_ID
