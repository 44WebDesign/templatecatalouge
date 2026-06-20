import React from 'react';
import { Link } from "react-router-dom";

const FooterServicesWidget = () => {
    return (
        <>
            <div className="te-footer-widget te_widget_nav_menu">
                <h2 className="te-footer-widget-title">More Service</h2>
                <ul className="no-icon">
                    <li><Link to="#">Engine Diagnostics</Link></li>
                    <li><Link to="#">Suspension Tuning</Link></li>
                    <li><Link to="#">Transmission Service</Link></li>
                    <li><Link to="#">AutoFix Solutions</Link></li>
                    <li><Link to="#">Master Mechanics</Link></li>
                </ul>
            </div>
        </>
    );
};

export default FooterServicesWidget;