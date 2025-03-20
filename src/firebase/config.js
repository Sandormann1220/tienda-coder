import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkulP8hp7t71eaBIQB3lllVLr-562MEV4",
  authDomain: "tienda-react-6cca0.firebaseapp.com",
  projectId: "tienda-react-6cca0",
  storageBucket: "tienda-react-6cca0.firebasestorage.app",
  messagingSenderId: "665121450572",
  appId: "1:665121450572:web:1a66ebfd12884345a4a2e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
