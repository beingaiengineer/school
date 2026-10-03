import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';

import siteConfig from '@generated/docusaurus.config';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: siteConfig.customFields.firebaseApiKey as string,
  authDomain: siteConfig.customFields.firebaseAuthDomain as string,
  projectId: siteConfig.customFields.firebaseProjectId as string,
  storageBucket: siteConfig.customFields.firebaseStorageBucket as string,
  messagingSenderId: siteConfig.customFields.firebaseMessagingSenderId as string,
  appId: siteConfig.customFields.firebaseAppId as string
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut };
