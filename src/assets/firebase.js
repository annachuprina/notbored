import firebase from "firebase/compat/app"
import "firebase/compat/auth" 
import "firebase/compat/database" 
import "firebase/compat/firestore" 

const app = firebase.initializeApp ({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

const auth = app.auth()
const database = app.database()
const firestore = app.firestore()

export { auth, app, database, firestore };
