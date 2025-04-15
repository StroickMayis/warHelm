import React from 'react';
import { Link } from 'react-router-dom';
import campaignPreview from '../../assets/images/campaignPreview.jpeg';

function MenuBar() {
    return (
        <div className="fullSiteWidth" id="menuBarWide">
            <div id="menu">
                <div id="campaignMenuOverview">
                    <img id="campaignImage" src={campaignPreview} alt="Campaign Preview" />
                    <div id="campaignNameContainer">
                        <div id="campaignName">End of the Line</div>
                        <Link to="/campaign-list" id="changeCampaign">Change Campaign</Link>
                    </div>
                </div>
                <div>Characters</div>
                <div>Rules</div>
                <div>Lore</div>
            </div>
        </div>
    );
}

{/* <div class="fullSiteWidth" id="menuBarWide">
    <div id="menu">
        <div id="campaignMenuOverview">
            <img id="campaignImage" src="../images/campaignPreview.jpeg" alt="Campaign Preview">
            <div id="campaignNameContainer">
                <div id="campaignName">End of the Line</div>
                <a href="./campaignList.html" id="changeCampaign">Change Campaign</a>
            </div>
        </div>
        <div>Characters</div>
        <div>Rules</div>
        <div>Lore</div>
    </div>
</div> */}

export default MenuBar;