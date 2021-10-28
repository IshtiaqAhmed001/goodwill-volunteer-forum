import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { signInWithGoogle, createAccountWithEmail, updateName, setUser, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGetName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleGetEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleGetPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    // signup using email and password 
    const handleRegistration = e => {
        createAccountWithEmail(email, password)
            .then((res) => {
                setIsLoading(true);
                updateName(name);
                setUser(res.user);
                history.push(url);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => {
                setIsLoading(false);
            })

        e.preventDefault();
    }


    // sign in using google directly
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setIsLoading(true);
                setUser(res.user);
                history.push(url);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div>
            <h2 className="my-5">Please Register</h2>
            <div>
                <form onSubmit={handleRegistration} >
                    <input type="text" onBlur={handleGetName} placeholder="Name" />
                    <br />
                    <input type="email" onBlur={handleGetEmail} placeholder="Email" />
                    <br />
                    <input type="password" onBlur={handleGetPassword} placeholder="Password" />
                    <br />
                    <input type="submit" value="Register" />
                </form>
            </div>
            <h3 className="mt-5">Already Registered ?</h3>
            <button onClick={handleGoogleSignIn} className="btn btn-success">Google Sign In</button>

        </div>
    );
};

export default Register;