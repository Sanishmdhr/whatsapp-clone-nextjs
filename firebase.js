import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9JEPqLUJFiIcQxSAEGeuBd5JeuDvEo94",
  authDomain: "whatsapp-nextjs-e3f1c.firebaseapp.com",
  projectId: "whatsapp-nextjs-e3f1c",
  storageBucket: "whatsapp-nextjs-e3f1c.appspot.com",
  messagingSenderId: "525475403468",
  appId: "1:525475403468:web:d088a740e8d24041fd9469",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
