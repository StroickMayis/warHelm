import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function SiteBar() {
    return (
        <div className="fullSiteWidth" id="siteBarWide">
            <div id="siteBar">
                <div><Link to="/"><img id="logo" src={logo} alt="The WarHelm Logo" /></Link></div>
                <div>Searchbar</div>
                <div>Forums</div>
                <div>Guide</div>
                <div><Link to="/login">Log In</Link></div>
            </div>
        </div>
    );
}

{/* <div class="fullSiteWidth" id="siteBarWide">
    <div id="siteBar">
        <div><a href="./index.html"><img id="logo" src="../images/logo.png" alt="The WarHelm Logo"></a></div>
        <div>Searchbar</div>
        <div>Forums</div>
        <div>Guide</div>
        <div><a href="./logIn.html">Log In</a></div>
    </div>
</div> */}

export default SiteBar;
