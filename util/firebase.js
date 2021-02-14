import firebase from 'firebase';
import 'firebase/analytics'
import { firebaseApiKey } from './config';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "firzatullahd-music-player.firebaseapp.com",
    projectId: "firzatullahd-music-player",
    storageBucket: "firzatullahd-music-player.appspot.com",
    messagingSenderId: "740932598043",
    appId: "1:740932598043:web:b6e9cfe7f64503823ffbbe",
    measurementId: "G-FLLPFHYYXS"
};

if (typeof window !== "undefined" && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export default firebase

