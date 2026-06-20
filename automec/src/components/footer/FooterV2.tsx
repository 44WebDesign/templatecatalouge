import React from 'react';
import { Link } from "react-router-dom";
import FooterBottomV1 from './FooterBottomV1';
import SocialShare from "../slider/SocialShare";
import FooterServicesWidget from "../widgets/FooterServicesWidget";

const FooterV2 = () => {
    return (
        <>
            {/*- Start Footer !*/}
            <footer className="footer style-2">
                <div className="te-footer-bg">
                    <div
                        className="footer-bg-overlay"
                        style={{ backgroundColor: "rgba(23, 23, 23, 0.0)" }}
                    />
                    <img src="../../images/section-bg/footer-bg-two.jpg" alt="footer image" />
                </div>
                <div className="te-footer-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="te-footer-widget">
                                    <div className="te-footer-widget-info">
                                        <div className="te-footer-logo">
                                            <Link to="/">
                                                <img src="../../images/logo/logo-white.png" alt="Footer Logo" />
                                            </Link>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor amet, consectetur sell adipis elit phase
                                            nibh ellentes.
                                        </p>
                                        <div className="te-social-profile-wrapper">
                                            <span className="social-profile-title">Follow Us</span>
                                            <div className="te-social-profile">
                                                <SocialShare />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="te-footer-widget">
                                    <div className="te-footer-widget-contact">
                                        <h2 className="te-footer-widget-title">Contact Us</h2>
                                        <div className="footer-contact">
                                            <ul>
                                                <li>
                                                      <span className="contact-icon">
                                                        <i className="fa-solid fa-phone" />
                                                      </span>
                                                    <span className="contact-text">(316) 555-0116</span>
                                                </li>
                                                <li>
                                                      <span className="contact-icon">
                                                        <i className="fa-solid fa-envelope" />
                                                      </span>
                                                    <span className="contact-text">info@example.com</span>
                                                </li>
                                                <li>
                                                      <span className="contact-icon">
                                                        <i className="fa-solid fa-location-dot" />
                                                      </span>
                                                    <span className="contact-text">
                                                            3891 Ranchview Dr. Richardson, California 62639
                                                        </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <FooterServicesWidget />
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="te-footer-widget">
                                    <h2 className="te-footer-widget-title">Latest News</h2>
                                    <div className="te_widget_latest_post">
                                        <ul>
                                            <li>
                                                <div className="te-latest-post-thumb">
                                                    <Link to ="/blog-details/1">
                                                        <img src="../../images/blog/r1.jpg" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="te-latest-post-desc">
                                                      <span className="te-latest-post-meta">
                                                        December 11, 2023
                                                      </span>
                                                    <h3 className="te-latest-post-title">
                                                        <Link to ="/blog-details/1">
                                                            How to Protect Your Car Engine and Performance
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="te-latest-post-thumb">
                                                    <Link to ="/blog-details/1">
                                                        <img src="../../images/blog/r2.jpg" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="te-latest-post-desc">
                                                      <span className="te-latest-post-meta">
                                                        December 11, 2023
                                                      </span>
                                                    <h3 className="te-latest-post-title">
                                                        <Link to ="/blog-details/1">
                                                            Top 10 Car Service Tips &amp; Advice For You
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </li>
                                        </ul>
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

export default FooterV2;