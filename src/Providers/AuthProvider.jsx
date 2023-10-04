import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


// create a context 
 export const AuthContext = createContext(null)
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    // create user 

    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user 
    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logOut = ()=>{
        return signOut(auth)
    }

//    manage user using side effect 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('User in the auth state changed', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;