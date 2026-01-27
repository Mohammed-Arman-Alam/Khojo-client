import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_Api_Key,
    authDomain: import.meta.env.VITE_Auth_Domain,
    projectId: import.meta.env.VITE_Aroject_Id,
    storageBucket: import.meta.env.VITE_Atorage_Bucket,
    messagingSenderId: import.meta.env.VITE_Messaging_SenderId,
    appId: import.meta.env.VITE_App_Id,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);