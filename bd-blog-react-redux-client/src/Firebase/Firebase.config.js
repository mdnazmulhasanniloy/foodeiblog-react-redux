// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app"; 
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6xRycrfZoOujFW6aWuvBdtbcAffkYiQM",
  authDomain: "bd-blogs.firebaseapp.com",
  projectId: "bd-blogs",
  storageBucket: "bd-blogs.appspot.com",
  messagingSenderId: "1070691497668",
  appId: "1:1070691497668:web:63998f803f2e67ed557b91",
  measurementId: "G-83L82W5HTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app ;
// export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider();               
// export const facebookAuthProvider = new FacebookAuthProvider();               
 