import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Context } from '../../App.jsx';

//TODO: add image to the account display

function SiteBarAccountDisplay() {
    const { currentUser, setCurrentUser } = useContext(Context);

    return (
        <div id="siteBarAccountDisplay">
            <div id="siteBarAccountDisplayTextDiv">
                <div id="siteBarAccountDisplayUserName">{currentUser.userName}</div>
                <button 
                    id="siteBarAccountDisplayLogOut"
                    onClick={() => {
                        setCurrentUser(null);
                        sessionStorage.removeItem('currentUser');
                    }}
                >Log Out</button>
            </div>
            {/* <div id="siteBarAccountDisplayImageDiv">
                <img src={currentUser.profilePicture} alt="Profile Picture" />
            </div> */}
        </div>
    );
}

export default SiteBarAccountDisplay;