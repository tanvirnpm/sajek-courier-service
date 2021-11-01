import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import firebaseInitialize from '../../../firebaseInitialize';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    // logged user inform from user context api
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // firebase initialization
    firebaseInitialize();

    const auth = getAuth();
    const googleIconStyle = {
        height: '30px'
    }

    loggedUser.email && history.replace(from)
    // console.log('logged user form local storage', loggedUser)

    // login by gmail
    const signWithGmail = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setLoggedUser({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
                const userStoreInLocalStorage = JSON.stringify(
                    {
                        name: result.user.displayName,
                        email: result.user.email,
                        photo: result.user.photoURL
                    }
                );
                localStorage.setItem("loginUser", userStoreInLocalStorage);
                history.replace(from);
            }).catch((error) => {
                console.log(error)
            });
    }
    // console login user information initial state
    // console.log(loggedUser)
    return (
        <div className="vh-100 position-relative">
            <Navbar />
            <div className="position-absolute top-50 start-50 translate-middle">
                <h3 className="mb-5 text-center">Login</h3>
                <div style={{width: '300px'}} role="button" onClick={signWithGmail} className="border rounded-pill p-2 shadow-sm text-center">
                    <img style={googleIconStyle} src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    <span className="ms-1">Continue With Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;