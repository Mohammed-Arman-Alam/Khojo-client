import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider;
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const updateUser=(updatedData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    }
    const loginUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser =()=>{
        setLoading(true);
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
        loading,
        createUser,
        updateUser,
        loginUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;