import firebase from "firebase";
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCCkeLEpJNu45sDFWvRwsRvk2BEkbrWviY',
  authDomain: 'nextjs-firebase-analytics.firebaseapp.com',
  projectId: 'nextjs-firebase-analytics',
  storageBucket: 'nextjs-firebase-analytics.appspot.com',
  messagingSenderId: '86144694099',
  appId: '1:86144694099:web:00697c128e93a3c666d3a6  ',
  measurementId: 'G-LB15NDVGC2',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const analytics = firebase.analytics;

export { firebase, analytics };
