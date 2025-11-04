// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Import Firestore

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAlBY2QHUIuI3jfD2U7AfQ_jpCQ4cxWvng",
  authDomain: "quizmaster-ba465.firebaseapp.com",
  projectId: "quizmaster-ba465",
  storageBucket: "quizmaster-ba465.firebasestorage.app",
  messagingSenderId: "862896304301",
  appId: "1:862896304301:web:05fab4b064deaff782d624",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance
export { db };
