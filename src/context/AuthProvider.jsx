import React from 'react';
import { createContext } from "react";
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
    const authInfo ={
        createUser,
        updateUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;