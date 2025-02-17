
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe3YlHMo8zxXVtqmfbUXcjO73av26J3HQ",
  authDomain: "andicox-studio.firebaseapp.com",
  projectId: "andicox-studio",
  storageBucket: "andicox-studio.firebasestorage.app",
  messagingSenderId: "59814865841",
  appId: "1:59814865841:web:5781337271f86065152b90",
  measurementId: "G-846ZKCRK20"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 