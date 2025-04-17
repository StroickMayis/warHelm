import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Import components
import HomePage from './ui/pageComponents/homePage.jsx';
import CampaignList from './ui/uiComponents/campaignList.jsx';
import LogInPage from './ui/pageComponents/logInPage.jsx';
import LogIn from './ui/uiComponents/logIn.jsx';
import CreateAccount from './ui/uiComponents/createAccount.jsx';
import ForgotPassword from './ui/uiComponents/forgotPassword.jsx';
import NoPage from './ui/pageComponents/noPage.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} >
                    {/* If I make a route in here with "index" it will be the default route, they can't have children routes though, you'll probably want layout routes to be able to have children routes */}
                    {/* A <Route path> without an element prop adds a path prefix to its child routes, without introducing a parent layout. */}
                    <Route path="/campaign-list" element={<CampaignList />} />
                </Route>
                {/* I should make the login page divided into components, so that the background is like the main component that stays while the login part is changing */}
                {/* FIX THE CANNOT GET ISSUE WHEN I GET BACK */}
                <Route path="/login" element={<LogInPage />} >
                    <Route index element={<LogIn />} />
                    <Route path="create-account" element={<CreateAccount />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App; 