import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "ecommerce-website-7369e.firebaseapp.com",
  projectId: "ecommerce-website-7369e",
  storageBucket: "ecommerce-website-7369e.appspot.com",
  messagingSenderId: "479089799921",
  appId: "1:479089799921:web:379c238676fa8d185def50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
