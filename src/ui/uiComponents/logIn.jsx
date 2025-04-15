import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div id="logIn">
            <Link to="/" id="logInPageHomeLogoLink">
                <img src="../images/logo.png" alt="WarHelm Logo" />
            </Link>
            <div className="logInContainer">
                <form id="logInForm" action="" method="post">
                    <legend>Welcome Back!</legend>
                    <div id="logInSubContainer">
                        <div id="emailContainer" className="textInputContainer">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div id="passwordContainer" className="textInputContainer">
                            <input id="logInPassword" type="password" name="password" placeholder="Password" maxLength="30" required />
                            <img className="passwordViewerIcon" id="passwordViewerIcon" src="../images/passwordEyeVisible.png" alt="PasswordViewer" />
                        </div>
                        <div id="logInButtons">
                            <button id="logInButton" type="submit">Log In</button>
                        </div>
                        <div className="logInFormText">
                            <Link to="/forgot-password">Forgot Password?</Link>
                            <br />
                            Don't have an account? <br />
                            <Link to="/create-account">Create Account</Link>
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
        <!-- <img src="../images/logo.png" alt="WarHelm Logo"> -->
        <form action="" method="post">
            <legend for="">Log In</legend>
            <div id="logInSubContainer">
                <!-- NOTE: MAKE LABELS GO INSIDE OF INPUT -->
                <div id="emailContainer" class="textInputContainer">
                    <input type="email" id="email" name="email" placeholder="Email" required>
                </div>
                <div id="passwordContainer" class="textInputContainer">
                    <input type="password" id="password" name="password" placeholder="Password" required>
                    <img class="passwordViewerIcon" id="passwordViewerIconLogIn" src= "../images/passwordEyeVisible.png" alt="PasswordViewer">
                </div>
                <div>
                    <a id="forgotPasswordLink" href="./forgotPassword.html">Forgot Password?</a>
                </div>
                <div id="logInButtons">
                    <button type="submit">Log In</button>
                </div>
                <div class="logInFormText">
                    New Here? <br><a href="createAccount.html">Create an Account</a>
                </div>
            </div>
        </form>
    </div>
</body> */}

export default LogIn;