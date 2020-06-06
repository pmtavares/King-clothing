import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {Config} from './config';
/*
const config = {  
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  databaseURL: Config.databaseURL,
  projectId: Config.storageBucket,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId,
  appId: Config.appId,
  measurementId: Config.measurementId  

}; */

  export const createUserProfile = async (userAuth, additionalData) =>{
    if(!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //const collectionRef = firestore.collection('users')
  
    const snapShot = await userRef.get();
    //const collectionSnapshot = await collectionRef.get();
    //console.log({collection: collectionSnapshot.docs.map(doc => doc.data())})

    if(!snapShot.exists)
    {

      const {displayName, email} = userAuth.user;
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
  firebase.initializeApp(Config);

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
    });

    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformCollection = collections.docs.map(doc => {
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    })
    return transformCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
   
  }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;

