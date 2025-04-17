import React from 'react';
import SiteBar from '../uiComponents/siteBar.jsx';
import MenuBar from '../uiComponents/menuBar.jsx';
import { Outlet } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <header>
                <SiteBar />
                <MenuBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* Footer content will go here */}
            </footer>
        </>
    );
}

export default HomePage; 