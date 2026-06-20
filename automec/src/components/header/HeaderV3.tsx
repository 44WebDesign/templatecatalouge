import React, { useEffect, useState } from 'react';
import HeaderLogo from './HeaderLogo';
import MainMenu from './MainMenu';
import { Link } from "react-router-dom";
import SideBarMenu from './SideBarMenu';
import SideBarOverlay from './SideBarOverlay';

const HeaderV3 = () => {

    // Sticky Menu
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // SideBar
    const [isMenuActive, setMenuActive] = useState(false);

    const openMenu = () => {
        setMenuActive(true);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const handleOverlayClick = () => {
        closeMenu();
    };

    // Mobile DropDown
    const toggleSubMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const listItem = (e.target as HTMLElement).parentElement;
        if (!listItem) return;

        const subMenu = listItem.querySelector('ul.te-submenu') as HTMLElement | null;
        if (subMenu) {
            listItem.classList.toggle('on');
            subMenu.style.maxHeight = subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
        }
    };

    return (
        <>
            <header className="header-area style-2">
                <div className={`te-header-menu-area te-sticky-header ${isSticky ? "te-sticky_menu" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                                <HeaderLogo />
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-6 col-6 d-flex align-items-center justify-content-end">
                                <div className="te-menu d-lg-inline-block d-none">
                                    <MainMenu toggleSubMenu={toggleSubMenu} />
                                </div>
                                <div className="te-header-btn">
                                    <Link to="/contact" className="te-cta-btn">JOIN HUB <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                                <div className="te-mobile-menu-bar d-lg-none text-end">
                                    <Link
                                        to="#"
                                        className="te-mobile-menu-toggle-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openMenu();
                                        }}
                                    ><i className="fal fa-bars"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <SideBarMenu toggleSubMenu={toggleSubMenu} closeMenu={closeMenu} isMenuActive={isMenuActive} />

            <SideBarOverlay isMenuActive={isMenuActive} handleOverlayClick={handleOverlayClick} />
        </>
    );
};

export default HeaderV3;