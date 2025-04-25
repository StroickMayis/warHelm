import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import passwordEyeVisible from '../../assets/images/passwordEyeVisible.png';
import { Context } from '../../App.jsx';


function LogIn() {
    const { currentUser, setCurrentUser } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;
    const [email, setEmail] = useState(() => '');
    const [password, setPassword] = useState(() => ''); // TODO: Add password confirmation, and password visibility toggle, and email validation, then finally figure out login logic.
    const [loginMessage, setLoginMessage] = useState(() => '');
    const [legendMessage, setLegendMessage] = useState(() => 'Welcome Back!');
    useEffect(() => {
        if(data?.newAccount) {
            setLoginMessage('* Account created successfully! Please log in.');
            setLegendMessage('Welcome!');
        }
    }, [data]);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleLogInClick = () => {
        const accounts = JSON.parse(localStorage.getItem(`accounts`));
        if(accounts.some(account => account.email === email && account.password === password)) {
            sessionStorage.setItem(`currentUser`, JSON.stringify(accounts.find(account => account.email === email && account.password === password)));
            setCurrentUser(JSON.parse(sessionStorage.getItem(`currentUser`)));
            navigate('/');
        } else {
            setLoginMessage('* Invalid email or password');
        }
    }

    return (
        <div className="logInContainer">
            <form
                id="logInForm"
                action=""
                method="post"
            >
                <legend>{legendMessage}</legend>
                <div id="logInSubContainer">
                    <div id="emailContainer" className="textInputContainer">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div id="passwordContainer" className="textInputContainer">
                        <input
                            id="logInPassword"
                            type="password"
                            name="password"
                            placeholder="Password"
                            maxLength="30"
                            required
                            onChange={handlePasswordChange}
                        />
                        <img
                            className="passwordViewerIcon"
                            id="passwordViewerIcon"
                            src={passwordEyeVisible}
                            alt="PasswordViewer"
                        />
                    </div>
                    <div id="loginMessageContainer">
                        {loginMessage && (
                            <p id="loginMessage">{loginMessage}</p>
                        )}
                    </div>
                    <div id="logInButtons">
                        <button
                            id="logInButton"
                            type="button"
                            onClick={handleLogInClick}
                        >
                            Log In
                        </button>
                    </div>
                    <div className="logInFormText">
                        <Link to="/login/forgot-password">Forgot Password?</Link>
                        <br />
                        Don't have an account? <br />
                        <Link to="/login/create-account">Create Account</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LogIn;