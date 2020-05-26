import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5a9k5oCj1QuBu9FRnovRJQpDAKdog9Ro",
    authDomain: "pasar-kita-dc90e.firebaseapp.com",
    databaseURL: "https://pasar-kita-dc90e.firebaseio.com",
    projectId: "pasar-kita-dc90e",
    storageBucket: "pasar-kita-dc90e.appspot.com",
    messagingSenderId: "733953174749",
    appId: "1:733953174749:web:24fce09857c71ef251bf34",
    measurementId: "G-TB6RD8K1RG"
  };

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;