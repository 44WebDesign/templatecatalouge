import React from 'react';
import { Link } from "react-router-dom";

const FooterBottomV1 = () => {
    return (
        <>
            <div className="te-footer-bottom-wrapper">
                <div className="te-copyright-text">
                    <p>&copy; <Link to="#">Automec</Link> {(new Date().getFullYear())} | All Rights Reserved</p>
                </div>
                <div className="te-footer-bottom-menu">
                    <ul>
                        <li>
                            <Link to="#">Terms & Condition</Link>
                        </li>
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterBottomV1;