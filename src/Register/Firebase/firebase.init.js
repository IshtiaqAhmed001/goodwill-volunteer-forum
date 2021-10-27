import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.firebase";


const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;