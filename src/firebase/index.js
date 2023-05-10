
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABtxp-XB6jkGqQUsf5FzwJjjOXNuAWQwU",
  authDomain: "mensagens-adv.firebaseapp.com",
  databaseURL: "https://mensagens-adv-default-rtdb.firebaseio.com",
  projectId: "mensagens-adv",
  storageBucket: "mensagens-adv.appspot.com",
  messagingSenderId: "440904438388",
  appId: "1:440904438388:web:d56be8250f8463a6d43721"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db