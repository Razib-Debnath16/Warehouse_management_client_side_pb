// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtbIndTZIolreAwLqwQbmb4ZhJ5S28Wak",
    authDomain: "smartphone-warehouse-d99f2.firebaseapp.com",
    projectId: "smartphone-warehouse-d99f2",
    storageBucket: "smartphone-warehouse-d99f2.appspot.com",
    messagingSenderId: "146518359220",
    appId: "1:146518359220:web:db603073c3ea286724abe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;