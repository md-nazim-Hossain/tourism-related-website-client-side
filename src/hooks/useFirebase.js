import initFirebaseConfig from "../Firebase/firebase.init";
import {getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,
    createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile,sendPasswordResetEmail} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

initFirebaseConfig();

const useFirebase = () =>{

    const [user,setUser] = useState({});
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    const signOutClick = () =>{
        signOut(auth)
        .then(result=>{
            setUser({});
            setError('');
        })
        .catch(e =>{
            setError(e.message);
        })
    }

    useEffect(() =>{
        const unsubsrciber = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        return unsubsrciber;
    },[]);

    // set data on the state
    const handleName = e =>{
        setName(e.target.value);
    }
    const handlePhone = e =>{
        setPhone(e.target.value);
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        const pass = e.target.value;
        const err = 'Password Must have ';
        if(pass.length < 6){
            setError(err+'6 character length');
        }
        else if(!/(?=.*?[A-Z]*[A-Z])/.test(pass)){
            setError(err+'Two UpperCase letter')
        }
        else{
            setPassword(e.target.value);
            setError('')
        } 
    }
    /// create user with firebase
    const handleRegister = () =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleSignIn = () =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdate =  () =>{
        updateProfile(auth.currentUser, {
            displayName:name,photoURL:user.photoURL ||"https://lh3.googleusercontent.com/a-/AOh14GjFagRswZECmhBi_rUYm9C4I-G6uGbq5BnS8wxLsg=s96-c",
            phoneNumber:phone
        }).then(()=>{
            const  newUserName = {...user,displayName:name}
            setUser(newUserName);
            setError('');
        })
        .catch(e =>{
            setError(e.message)
        })
    }

    const handlePasswordReset = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{
            setError(' ');
        }).catch(e =>{
            setError(e.message)
        })
    }
    return {
        user,
        error,
        setUser,
        setError,
        signInGoogle,
        signOutClick,
        handleUpdate,
        handleName,
        handlePhone,
        handleEmail,
        handlePassword,
        handleRegister,
        handleSignIn,
        handlePasswordReset,
        isLoading,
        setIsLoading,
    }
}

export default useFirebase;