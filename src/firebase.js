import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBYXiT5mh0CjfjCKY7ysbf3zMNe1IoV27E",
  authDomain: "sagatest-a829f.firebaseapp.com",
  projectId: "sagatest-a829f",
  storageBucket: "sagatest-a829f.appspot.com",
  messagingSenderId: "577008039744",
  appId: "1:577008039744:web:f192eb754127716ea12ca5",
  measurementId: "G-RYR2W8H7ZF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
