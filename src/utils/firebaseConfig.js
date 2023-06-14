// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC54j-0S-nHTwYkqKdKVk-ATlmsA280hxU',
	authDomain: 'veggieboxdb.firebaseapp.com',
	projectId: 'veggieboxdb',
	storageBucket: 'veggieboxdb.appspot.com',
	messagingSenderId: '1083298547103',
	appId: '1:1083298547103:web:246d988d3c80145ad2a9aa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default db;
