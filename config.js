import firebase from 'firebase'

require('@firebase/firestore');
  
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA5aSSOt4Mp7A9SsYwsQXAYgOlLcmrtjVw",
authDomain: "barter-app-2593d.firebaseapp.com",
projectId: "barter-app-2593d",
storageBucket: "barter-app-2593d.appspot.com",
messagingSenderId: "533949928917",
appId: "1:533949928917:web:b4e47bd0ca2eeb8edd595c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();