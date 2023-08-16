
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDeUS3eO4W1M6k11jWv82hfJ0BCrZ71kCs",
  authDomain: "react-netflix-clone-6f71d.firebaseapp.com",
  projectId: "react-netflix-clone-6f71d",
  storageBucket: "react-netflix-clone-6f71d.appspot.com",
  messagingSenderId: "689071962556",
  appId: "1:689071962556:web:7ee814875859cfc2e193b9",
  measurementId: "G-TFZCF6E7EE"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);