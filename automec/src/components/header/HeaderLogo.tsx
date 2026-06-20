import React from 'react';
import { Link } from "react-router-dom";

const HeaderLogo = () => {
    return (
        <>
            <div className="te-logo">
                <Link to="/" className="te-standard-logo">
                    <img src="../../images/logo/logo-white.png" alt="logo" />
                </Link>
                <Link to="/" className="te-sticky-logo">
                    <img src="../../images/logo/logo.png" alt="logo" />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;