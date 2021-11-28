// Initialize Cloud Firestore through Firebase

import firebase from 'firebase';
firebase.initializeApp({
  apiKey: 'AIzaSyD9w4h3YcG1TBMwwCkiFNVbjaHZP-SUmnA',
  authDomain: 'shopping-list-36aad.firebaseapp.com',
  projectId: 'shopping-list-36aad',
  storageBucket: 'shopping-list-36aad.appspot.com',
  messagingSenderId: '314559136847',
  appId: '1:314559136847:web:2b4d93633ddf1f4a59d63a',
  measurementId: 'G-7SYGWMWY49',
});

const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

export { db, storage, storageRef };
