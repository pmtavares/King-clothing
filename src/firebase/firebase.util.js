import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "kingcloth-db.firebaseapp.com",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "kingcloth-db",
    storageBucket: "kingcloth-db.appspot.com",
    messagingSenderId: "XXXXXXXXXXX",
    appId: ":X:XXXXXXXXXXXXXXXXx",
    measurementId: "G-XXXXXXXXXX"
  };

  export const createUserProfile = async (userAuth, additionalData) =>{
    if(!userAuth) return;
  
    console.log(firestore.doc('users/pedrotavares41'));
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    console.log(snapShot)
    if(!snapShot.exists)
    {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
  
      }catch(err){
        console.log("Error creating user," + err.message)
      }
    }
  
    return userRef;
  
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

