import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import passwordEyeVisible from '../../assets/images/passwordEyeVisible.png';

function LogIn() {
    return (
        <div className="logInContainer">
            <form id="logInForm" action="" method="post">
                <legend>Welcome Back!</legend>
                <div id="logInSubContainer">
                    <div id="emailContainer" className="textInputContainer">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div id="passwordContainer" className="textInputContainer">
                        <input id="logInPassword" type="password" name="password" placeholder="Password" maxLength="30" required />
                        <img className="passwordViewerIcon" id="passwordViewerIcon" src={passwordEyeVisible} alt="PasswordViewer" />
                    </div>
                    <div id="logInButtons">
                        <button id="logInButton" type="submit">Log In</button>
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