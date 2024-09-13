import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import the Firestore module

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCcmCL1Xg1r_nDtCHi8fhQIoMU-rJfDOvM",
	authDomain: "task-app-40b27.firebaseapp.com",
	projectId: "task-app-40b27",
	storageBucket: "task-app-40b27.appspot.com",
	messagingSenderId: "1049281545811",
	appId: "1:1049281545811:web:7b3c93d7a9dc14784b68a6",
	measurementId: "G-WCHL568SFD"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
