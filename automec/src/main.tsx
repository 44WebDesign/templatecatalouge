import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/others/ScrollToTop.jsx';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');

if (container) {
    ReactDOM.createRoot(container).render(
        <React.StrictMode>
            <HelmetProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <App />
                </BrowserRouter>
            </HelmetProvider>
        </React.StrictMode>
    );
} else {
    throw new Error("Root container not found. Make sure there's an element with id='root' in your HTML.");
}
