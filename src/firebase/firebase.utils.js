import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD06yXCNDZs0w8pTlbfXO_Fo9RLozmJhjs',
  authDomain: 'crwn-db-c451c.firebaseapp.com',
  projectId: 'crwn-db-c451c',
  storageBucket: 'crwn-db-c451c.appspot.com',
  messagingSenderId: '924802252556',
  appId: '1:924802252556:web:86b72bb6885b34d4179329',
  measurementId: 'G-M38MVQ9LRR',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
