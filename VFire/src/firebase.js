import {initializeApp} from 'firebase';
const app = initializeApp({
    apiKey: "AIzaSyB6-4xvdJXFFcAmK3ms2oVAlnTseBdCsSE",
    authDomain: "first-firebase-web-d13b7.firebaseapp.com",
    databaseURL: "https://first-firebase-web-d13b7.firebaseio.com",
    projectId: "first-firebase-web-d13b7",
    storageBucket: "first-firebase-web-d13b7.appspot.com",
    messagingSenderId: "257797345853"
});

export const db = app.database();
export const namesRef = db.ref('names');
