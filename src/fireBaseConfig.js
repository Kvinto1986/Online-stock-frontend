import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCOG-VMoaW7sOJUtT1V32lHGKU1kwiDvr8",
    authDomain: "saveithare.firebaseapp.com",
    databaseURL: "https://saveithare.firebaseio.com",
    projectId: "saveithare",
    storageBucket: "saveithare.appspot.com",
    messagingSenderId: "1008560502490",
    appId: "1:1008560502490:web:31d0357d592af1f28e97e3",
    measurementId: "G-00W272CX7J"
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {
    storage, firebase as default
}
