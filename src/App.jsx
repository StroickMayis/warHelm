import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Import components
import HomePage from './ui/uiComponents/homePage.jsx';
import CampaignList from './ui/uiComponents/campaignList.jsx';
import LogIn from './ui/uiComponents/logIn.jsx';
import CreateAccount from './ui/uiComponents/createAccount.jsx';
import ForgotPassword from './ui/uiComponents/forgotPassword.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/campaign-list" element={<CampaignList />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
}

export default App; 