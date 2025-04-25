import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Context } from '../../App.jsx';
import SiteBarAccountDisplay from './siteBarAccountDisplay.jsx';

function SiteBar() {
    const { currentUser, setCurrentUser } = useContext(Context);
    
    return (
        <div className="fullSiteWidth" id="siteBarWide">
            <div id="siteBar">
                <div><Link to="/"><img id="logo" src={logo} alt="The WarHelm Logo" /></Link></div>
                <div id="siteBarSearchBar">Searchbar</div>
                <div id="siteBarForums">Forums</div>
                <div id="siteBarGuide">Guide</div>
                {currentUser ? (
                    <SiteBarAccountDisplay />
                ) : (
                    <div><Link to="/login">Log In</Link></div>
                )}
            </div>
        </div>
    );
}

export default SiteBar;
