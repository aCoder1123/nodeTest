// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDoVcbCNggCueZYRJlCf9UQmy-sgEg7H1I",
	authDomain: "pitscouting-42c48.firebaseapp.com",
	projectId: "pitscouting-42c48",
	storageBucket: "pitscouting-42c48.appspot.com",
	messagingSenderId: "1060340178521",
	appId: "1:1060340178521:web:3093781714cee728cf9b48",
	measurementId: "G-LFWZFYEZ8J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
