import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css";

// Add ready class to body when page is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('ready');
});

const container = document.getElementById('root');
if (!container) {
    throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
