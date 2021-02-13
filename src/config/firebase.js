import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};


firebase.initializeApp(firebaseConfig);





export {
  firebase
}