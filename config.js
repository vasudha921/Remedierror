import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAfDG3ak7dEe_HMJJATlT34RxshvcxjTBg",
  authDomain: "remedi-21274.firebaseapp.com",
  projectId: "remedi-21274",
  storageBucket: "remedi-21274.appspot.com",
  messagingSenderId: "431249560908",
  appId: "1:431249560908:web:156b77420273619ab82be9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
