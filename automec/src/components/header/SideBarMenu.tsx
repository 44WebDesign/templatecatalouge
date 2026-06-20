import React from 'react';
import MainMenu from './MainMenu';
import { Link } from "react-router-dom";
import SocialShare from '../slider/SocialShare';

type SideBarMenuProps = {
    isMenuActive: boolean;
    closeMenu: () => void;
    toggleSubMenu: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const SideBarMenu = ({ isMenuActive, closeMenu, toggleSubMenu }: SideBarMenuProps) => {
    return (
        <>
            <div className={`te-menu-sidebar-area ${isMenuActive ? 'active' : ''}`}>
                <div className="te-menu-sidebar-wrapper">
                    <div className="te-menu-sidebar-close">
                        <button className="te-menu-sidebar-close-btn" id="menu_sidebar_close_btn" onClick={closeMenu}>
                            <i className="fal fa-times"></i>
                        </button>
                    </div>
                    <div className="te-menu-sidebar-content">
                        <div className="te-menu-sidebar-logo">
                            <Link to="/">

                                <img src="../../images/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="te-mobile-nav-menu d-lg-none">
                            <MainMenu toggleSubMenu={toggleSubMenu} />
                        </div>
                        <div className="te-menu-sidebar-content">
                            <div className="te-menu-sidebar-single-widget">
                                <h5 className="te-menu-sidebar-title">Contact Info</h5>
                                <div className="te-header-contact-info">
                                    <span><i className="fa-solid fa-location-dot"></i>6391 Elgin St. Celina, 10299</span>
                                    <span><Link to="mailto:info@example.com"><i
                                        className="fa-solid fa-envelope"></i>info@example.com</Link> </span>
                                    <span><Link to="tel:+123-456-7890"><i className="fa-solid fa-phone"></i>+123-456-7890</Link></span>
                                </div>
                                <div className="te-social-profile">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBarMenu;