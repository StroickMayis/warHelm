import React from 'react';
import SiteBar from './siteBar.jsx';
import MenuBar from './menuBar.jsx';

function HomePage() {
    return (
        <>
            <header>
                <SiteBar />
                <MenuBar />
            </header>
            <main>
                {/* Main content will go here */}
            </main>
            <footer>
                {/* Footer content will go here */}
            </footer>
        </>
    );
}

export default HomePage; 