import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import passwordEyeVisible from '../../assets/images/passwordEyeVisible.png';

function CreateAccount() {
    return (
        <div className="logInContainer">
            <form id="createAccountForm" action="" method="post">
                <legend>Welcome!</legend>
                <div id="logInSubContainer">
                    <div id="emailContainer" className="textInputContainer">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div id="userNameContainer" className="textInputContainer">
                        <input type="text" id="userName" name="userName" placeholder="Username" maxLength="30" required />
                    </div>
                    <div id="passwordContainer" className="textInputContainer">
                        <input id="createAccountPasswordOne" type="password" name="password" placeholder="Password" maxLength="30" required />
                        <img className="passwordViewerIcon" id="passwordViewerIconOne" src={passwordEyeVisible} alt="PasswordViewer" />
                    </div>
                    <div id="passwordContainer" className="textInputContainer">
                        <input id="createAccountPasswordTwo" type="password" name="passwordConfirm" placeholder="Confirm Password" maxLength="30" required />
                        <img className="passwordViewerIcon" id="passwordViewerIconTwo" src={passwordEyeVisible} alt="PasswordViewer" />
                    </div>
                    <div id="passwordsDoNotMatchMessageContainer">
                    </div>
                    <div id="logInButtons">
                        <button id="createAccountButton" type="submit">Create Account</button>
                    </div>
                    <div className="logInFormText">
                        Already have an account? <br />
                        <Link to="/login">Log In</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateAccount;