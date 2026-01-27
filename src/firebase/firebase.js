import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.ApiKey,
    authDomain: import.meta.env.AuthDomain,
    projectId: import.meta.env.ArojectId,
    storageBucket: import.meta.env.AtorageBucket,
    messagingSenderId: import.meta.env.MessagingSenderId,
    appId: import.meta.env.AppId,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);