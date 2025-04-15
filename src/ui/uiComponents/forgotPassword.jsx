import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <div id="logIn">
            <Link to="/" id="logInPageHomeLogoLink">
                <img src="../images/logo.png" alt="WarHelm Logo" />
            </Link>
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
        </div>
    );
}

{/* <body id="logIn">
    <a href="../pages/index.html" id="logInPageHomeLogoLink"><img src="../images/logo.png" alt="WarHelm Logo"></a>
    <div class="logInContainer">
        <form action="" method="post">
            <legend for="">Password Reset</legend>
            <div id="logInSubContainer">
                <p>Enter the Email associated with your Warhelm account.</p>
                <div id="emailContainer" class="textInputContainer">
                    <input type="email" id="email" name="email" placeholder="Email" required>
                </div>
                <div id="logInButtons">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
</body> */}

export default ForgotPassword;