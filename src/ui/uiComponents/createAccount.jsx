import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import passwordEyeVisible from '../../assets/images/passwordEyeVisible.png';
import passwordEyeInvisible from '../../assets/images/passwordEyeInvisible.png';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [isFormSubmissionValid, setIsFormSubmissionValid] = useState(() => false);
    const [passwordOne, setPasswordOne] = useState(() => '');
    const [passwordTwo, setPasswordTwo] = useState(() => '');
    const [loginMessage, setLoginMessage] = useState(() => '');
    const [email, setEmail] = useState(() => '');
    const [userName, setUserName] = useState(() => '');

    const validate = (passwordOne, passwordTwo) => {
        if (passwordOne !== passwordTwo) {
            setLoginMessage('* Passwords do not match');
            checkFormSubmissionValidity(email, userName, passwordOne, passwordTwo);
        } else {
            setLoginMessage('');
            checkFormSubmissionValidity(email, userName, passwordOne, passwordTwo);
        }
    };

    const checkFormSubmissionValidity = (email, userName, passwordOne, passwordTwo) => {
        if(email.includes('@') && email.includes('.') && userName.length > 0 && passwordOne.length > 0 && passwordTwo.length > 0 && passwordOne === passwordTwo) {
            setIsFormSubmissionValid(true);
        } else {
            setIsFormSubmissionValid(false);
        }
    }

    const handlePasswordOneChange = (e) => {
        const newPasswordOne = e.target.value;
        setPasswordOne(e.target.value);
        validate(newPasswordOne, passwordTwo);
    };

    const handlePasswordTwoChange = (e) => {
        const newPasswordTwo = e.target.value;
        setPasswordTwo(e.target.value);
        validate(newPasswordTwo, passwordOne);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        checkFormSubmissionValidity(e.target.value, userName, passwordOne, passwordTwo);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        checkFormSubmissionValidity(email, e.target.value, passwordOne, passwordTwo);
    };

    const [passwordOneType, setPasswordOneType] = useState('password');
    const [passwordTwoType, setPasswordTwoType] = useState('password');

    const eyeballClickHandler = (e) => {
        if(e.target.id == "passwordViewerIconOne") {
            if(passwordOneType == "password") {
                setPasswordOneType('text');
                e.target.src = passwordEyeVisible;
            } else {
                setPasswordOneType('password');
                e.target.src = passwordEyeInvisible;
            }
        }

        if(e.target.id == "passwordViewerIconTwo") {
            if(passwordTwoType == "password") {
                setPasswordTwoType('text');
                e.target.src = passwordEyeVisible;
            } else {
                setPasswordTwoType('password');
                e.target.src = passwordEyeInvisible;
            }
        }
    }

    const handleCreateAccountClick = () => {
        const newAccount = {
            email: email,
            userName: userName,
            password: passwordOne,
        }
        const accounts = JSON.parse(localStorage.getItem(`accounts`));
        if(accounts?.some(account => account.email === newAccount.email)) {
            setLoginMessage('* Email already in use');
        } else {
            accounts.push(newAccount);
            localStorage.setItem(`accounts`, JSON.stringify(accounts));
            navigate('/login', { state: { newAccount: true } });
        }

    }

    return (
        <div className="logInContainer">
            <form
                id="createAccountForm"
                action=""
                method="post"
            >
                <legend>Welcome!</legend>
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
                    <div id="userNameContainer" className="textInputContainer">
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Username"
                            maxLength="30"
                            required
                            onChange={handleUserNameChange}
                        />
                    </div>
                    <div id="passwordContainer" className="textInputContainer">
                        <input
                            id="createAccountPasswordOne"
                            value={passwordOne}
                            onChange={handlePasswordOneChange}
                            type={passwordOneType}
                            name="password"
                            placeholder="Password"
                            maxLength="30"
                            required
                        />
                        <img
                            className="passwordViewerIcon"
                            onClick={eyeballClickHandler}
                            id="passwordViewerIconOne"
                            src={passwordEyeInvisible}
                            alt="PasswordViewer"
                        />
                    </div>
                    <div id="passwordContainer" className="textInputContainer">
                        <input
                            id="createAccountPasswordTwo"
                            value={passwordTwo}
                            onChange={handlePasswordTwoChange}
                            type={passwordTwoType}
                            name="passwordConfirm"
                            placeholder="Confirm Password"
                            maxLength="30"
                            required
                        />
                        <img
                            className="passwordViewerIcon"
                            onClick={eyeballClickHandler}
                            id="passwordViewerIconTwo"
                            src={passwordEyeInvisible}
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
                            id="createAccountButton"
                            disabled={!isFormSubmissionValid}
                            type="button"
                            onClick={handleCreateAccountClick}
                        >
                            Create Account
                        </button>
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