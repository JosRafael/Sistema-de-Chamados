
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCvRLuwZC71rBuWtRZR7D0Z3dvG7Wp8GoA",
  authDomain: "sistema-chamados-b8736.firebaseapp.com",
  projectId: "sistema-chamados-b8736",
  storageBucket: "sistema-chamados-b8736.appspot.com",
  messagingSenderId: "133091897425",
  appId: "1:133091897425:web:fec5761b05f52e67f04870",
  measurementId: "G-BX0SZ119QX"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };