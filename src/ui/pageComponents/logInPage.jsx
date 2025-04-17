import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import SiteBar from '../uiComponents/siteBar.jsx';
import MenuBar from '../uiComponents/menuBar.jsx';

function LogInPage() {
    return (
        <>
            <div id="logIn">
                <Link to="/" id="logInPageHomeLogoLink">
                    <img src={logo} alt="WarHelm Logo" />
                </Link>
                <Outlet />
                <footer>
                    {/* Footer content will go here */}
                </footer>
            </div>
            
        </>
    );
}

export default LogInPage; 