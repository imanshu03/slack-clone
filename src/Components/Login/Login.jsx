import React from 'react';
import Logo from "../../Assets/img/slack.png";
import Google from "../../Assets/img/google.png";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Actions";

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(
            res => {
                let { name, picture, email } = res.additionalUserInfo.profile;
                dispatch(loginUser({ name, picture, email }));
            }
        ).catch(err => alert(err.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt="logo" />
                <h2>Slack Clone</h2>
                <p>Made by Imanshu Rathore</p>
                <button onClick={signIn}>
                    <img src={Google} alt="google" />Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;