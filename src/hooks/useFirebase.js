import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe();
    }, []);


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const createAccountWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                console.log(error);
            });
    }


    return {
        user,
        setUser,
        signInWithGoogle,
        createAccountWithEmail,
        loginWithEmailAndPassword,
        isLoading,
        setIsLoading,
        logOut
    }
}

export default useFirebase;