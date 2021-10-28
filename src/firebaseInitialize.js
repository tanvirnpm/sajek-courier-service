
import { initializeApp } from "firebase/app";
const firebaseInitialize = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBCfJ_eB5FLyAThFAcFbKVJWVBj4KDiQ2I",
        authDomain: "sajek-courier-service.firebaseapp.com",
        projectId: "sajek-courier-service",
        storageBucket: "sajek-courier-service.appspot.com",
        messagingSenderId: "828090443490",
        appId: "1:828090443490:web:db5ca3fc20547160f6a0bb",
        measurementId: "G-PQKXTXYF2Z"
    };
    const app = initializeApp(firebaseConfig);
};

export default firebaseInitialize;