import React from 'react';
import { Link } from "react-router-dom";

const FooterLinksWidget = () => {
    return (
        <>
            <div className="te-footer-widget te_widget_nav_menu">
                <h2 className="te-footer-widget-title">Useful Links</h2>
                <ul className="no-icon">
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Our Team</Link></li>
                    <li><Link to="#">Recent News </Link></li>
                    <li><Link to="#">Projects</Link></li>
                    <li><Link to="#">Our All Services</Link></li>
                </ul>
            </div>
        </>
    );
};

export default FooterLinksWidget;