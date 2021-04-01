  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA_7FBf69iCL4svXu6uVYMof7-44rqFFu0",
    authDomain: "crwn-db-c1565.firebaseapp.com",
    projectId: "crwn-db-c1565",
    storageBucket: "crwn-db-c1565.appspot.com",
    messagingSenderId: "1097783118855",
    appId: "1:1097783118855:web:d879bba7f27a4dcbc42ea2",
    measurementId: "G-07PVB4D9SV"
  }


  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email} = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message)
      }
     }
    
     return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase