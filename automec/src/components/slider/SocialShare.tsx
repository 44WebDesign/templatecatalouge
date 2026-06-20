import React from 'react';
import { Link } from "react-router-dom";

const SocialShare = () => {
    return (
        <>
            <Link to="http://facebook.com" target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to="http://twitter.com" target='_blank'><i className="fa-brands fa-twitter"></i></Link>
            <Link to="https://www.linkedin.com" target='_blank'><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link to="https://www.pinterest.com" target='_blank'><i className="fa-brands fa-pinterest"></i></Link>
        </>
    );
};

export default SocialShare;