import React from 'react';
import { Link } from "react-router-dom";
import FooterServicesWidget from '../widgets/FooterServicesWidget';
import FooterBottomV1 from './FooterBottomV1';
import SocialShare from "../slider/SocialShare";
import FooterLinksWidget from "../widgets/FooterLinksWidget";
import SubscribeFormV1 from "../form/SubscribeFormV1";

const FooterV1 = () => {
    return (
        <>
            <SubscribeFormV1 />
            {/*- Start Footer !*/}
            <footer className="footer style-1">
                <div className="te-footer-bg">
                    <div
                        className="footer-bg-overlay"
                        style={{ backgroundColor: "rgba(23, 23, 23, 0.0)" }}
                    />
                    <img src="../../images/section-bg/footer-bg-one.jpg" alt="footer image" />
                </div>
                <div className="te-footer-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="te-footer-widget">
                                    <div className="te-footer-widget-info">
                                        <div className="te-footer-logo">
                                            <Link to="#/">
                                            <img
                                                src="../../images/logo/footer-logo-white.png"
                                                alt="Footer Logo"
                                            />
                                            </Link>

                                        </div>
                                        <p>
                                            Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply
                                            Ipsum is simply is dumiomy is text{" "}
                                        </p>
                                        <div className="te-social-profile-wrapper">
                                            <div className="te-social-profile">
                                                <SocialShare />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 footer-nav-widget">
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <FooterLinksWidget />
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <FooterServicesWidget />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="te-footer-widget">
                                    <div className="te-footer-widget-info">
                                        <h2 className="te-footer-widget-title">Contact Us</h2>
                                        <div className="single-info-wrapper">
                                            <div className="single-info">
                                                <span className="title">Number</span>
                                                <span className="text">(303) 555-0105</span>
                                            </div>
                                            <div className="single-info">
                                                <span className="title">Email</span>
                                                <span className="text">info@example.com</span>
                                            </div>
                                            <div className="single-info">
                                                <span className="title">Address</span>
                                                <span className="text">
                      6391 Elgin St. Celina, Delaware 10299
                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <FooterBottomV1 />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*- End Footer !*/}
        </>
    );
};

export default FooterV1;