import React from 'react';
import { createContext } from "react";
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo ={
        createUser,
        updateUser,
        loginUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;