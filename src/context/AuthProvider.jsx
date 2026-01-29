import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unSubscribe();
    },[]);
    const authInfo ={
        user,
        createUser,
        updateUser,
        loginUser,
        signOutUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;