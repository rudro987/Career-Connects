/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            setLoading(false);
            if(currentUser){       
                axios.post(`${import.meta.env.VITE_API_URL}/jwt` ,loggedUser, { withCredentials: true })
                .then(res => console.log('token response:', res.data))
            }else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, { withCredentials: true})
                .then(res => console.log('logout response:', res.data))
            }
        })
        return () => unSubscribe();
    }, []);

    const authenticationInfo = {user, setUser, registerUser, loading, userLogin, loginWithGoogle, logOutUser};

    return (
        <div>
            <AuthContext.Provider value={authenticationInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;