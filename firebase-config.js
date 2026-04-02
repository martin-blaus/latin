import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoZXpSzoWTTDEHhs5j3rWGmrjAz9AoiEc",
  authDomain: "latin-47239.firebaseapp.com",
  databaseURL: "https://latin-47239-default-rtdb.firebaseio.com",
  projectId: "latin-47239",
  storageBucket: "latin-47239.firebasestorage.app",
  messagingSenderId: "688747720457",
  appId: "1:688747720457:web:80c55bbc9d39a159432dd8",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
