import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyA9BIDx3Irlad3Xf1r_SURiywEGoBS5n4Q",
    authDomain: "disfruta-26073.firebaseapp.com",
    projectId: "disfruta-26073",
    storageBucket: "disfruta-26073.appspot.com",
    messagingSenderId: "750348843556",
    appId: "1:750348843556:web:074c2c39056706957676b1"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
