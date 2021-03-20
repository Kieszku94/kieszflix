import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {
    apiKey: "AIzaSyDs6YQWBmAIm4RMb3q_QvxqjLzUJDR5BlA",
    authDomain: "kieszflix.firebaseapp.com",
    projectId: "kieszflix",
    storageBucket: "kieszflix.appspot.com",
    messagingSenderId: "382249818017",
    appId: "1:382249818017:web:bfcdbd219c773974819de0"
  };
 

const firebase = Firebase.initializeApp(config);



export { firebase };