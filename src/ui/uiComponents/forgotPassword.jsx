import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function ForgotPassword() {
    return (
        <div className="logInContainer">
            <form id="forgotPasswordForm" action="" method="post">
                <legend>Forgot Password</legend>
                <div id="logInSubContainer">
                    <div id="emailContainer" className="textInputContainer">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div id="logInButtons">
                        <button id="forgotPasswordButton" type="submit">Reset Password</button>
                    </div>
                    <div className="logInFormText">
                        Remember your password? <br />
                        <Link to="/login">Log In</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;