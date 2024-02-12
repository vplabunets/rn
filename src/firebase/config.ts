import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {} from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBZLOYR1A7VXYdrxVjfKCFZaD5YNxdrP-k',
  authDomain: 'emisolo.firebaseapp.com',
  projectId: 'emisolo',
  storageBucket: 'emisolo.appspot.com',
  messagingSenderId: '973870389443',
  appId: '1:973870389443:web:e0c4e2651f669c5e7b6a76',
};

// Ініціалізуємо додаток Firebase
const app = initializeApp(firebaseConfig);

// Ініціалізуємо Firebase Auth і передаємо його у файл authActions.js
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
