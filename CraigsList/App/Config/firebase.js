import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBlXirySGqOy-Zb_UJD1cXNHAmimn_sJs8",
    authDomain: "aristote-project.firebaseapp.com",
    databaseURL: "https://aristote-project.firebaseio.com",
    projectId: "aristote-project",
    storageBucket: "aristote-project.appspot.com",
    messagingSenderId: "408371562307"
};
const Firebase = firebase.initializeApp(config);
export default Firebase;