import React from 'react';
import { Link } from "react-router-dom";

type MainMenuProps = {
    toggleSubMenu: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const MainMenu = ({ toggleSubMenu }: MainMenuProps) => {
    return (
        <>
            <nav id="main-menu" className="te-main-menu">
                <ul className='te-main-list'>
                    <li className="te-dropdown active">
                        <Link to="/" onClick={toggleSubMenu} className='dropdown-expand'>Home</Link>
                        <ul className="te-submenu">
                            <li className='te-list-item'><Link to="/">Home Page 1</Link></li>
                            <li className='te-list-item'><Link to="/home-2">Home Page 2</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/about">About Us</Link></li>
                    <li className="te-dropdown">
                        <Link to="/services" onClick={toggleSubMenu} className='dropdown-expand'>Services</Link>
                        <ul className="te-submenu">
                            <li className='te-list-item'><Link to="/services">Service Page</Link></li>
                            <li className='te-list-item'><Link to="/service-details/1">Service Details Page</Link></li>
                        </ul>
                    </li>
                    <li className="te-dropdown">
                        <Link to="/projects" onClick={toggleSubMenu} className='dropdown-expand'>Projects</Link>
                        <ul className="te-submenu">
                            <li className='te-list-item'><Link to="/projects">Project Page</Link></li>
                            <li className='te-list-item'><Link to="/project-details/1">Project Details Page</Link></li>
                        </ul>
                    </li>
                    <li className="te-dropdown">
                        <Link to="/blog" onClick={toggleSubMenu} className='dropdown-expand'>Blog</Link>
                        <ul className="te-submenu">
                            <li className='te-list-item'><Link to="/blog">Blog Page</Link></li>
                            <li className='te-list-item'><Link to="/blog-details/1">Blog Details Page</Link></li>
                        </ul>
                    </li>
                    <li className="te-dropdown">
                        <Link to="/team" onClick={toggleSubMenu} className='dropdown-expand'>Team</Link>
                        <ul className="te-submenu">
                            <li className='te-list-item'><Link to="/team">Team Page</Link></li>
                            <li className='te-list-item'><Link to="/team-details/1">Team Details Page</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default MainMenu;