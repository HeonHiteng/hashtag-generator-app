import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQeoyxnsC04FJCh-3SwiPbgUS5rxBzjfg",
    authDomain: "hashtag-auth-34383.firebaseapp.com",
    projectId: "hashtag-auth-34383",
    storageBucket: "hashtag-auth-34383.appspot.com",
    messagingSenderId: "629178135623",
    appId: "1:629178135623:web:3c4cfc594b707ce6dded62",
    measurementId: "G-W6KTG1LE3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;