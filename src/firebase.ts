import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyB8yWUrD5f1t1_ZwzH-qIdNhz5t9TojZS4",
    authDomain: "mobile-invitation-29f43.firebaseapp.com",
    databaseURL: "https://mobile-invitation-29f43-default-rtdb.firebaseio.com",
    projectId: "mobile-invitation-29f43",
    storageBucket: "mobile-invitation-29f43.appspot.com",
    messagingSenderId: "215409365221",
    appId: "1:215409365221:web:2fe5f81ede71d425b8840c"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
