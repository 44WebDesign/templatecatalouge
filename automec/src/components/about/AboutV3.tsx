import React from 'react';
import { Link } from "react-router-dom";
type AddStyleProps = {
    style?: string;
};

const AboutV3 = ({ style } : AddStyleProps) => {
    return (
        <>
            {/* Why Choose Us Area Start */}
            <div className={`why-choose-area style-1 te-pb-120 ${style}`}>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            <div className="te-section-title mb-0">
                                <div className="te-section-content">
                                    <div className="short-title-wrapper">
                                        <span className="short-title only-divider">Why Choose Us</span>
                                    </div>
                                    <h2 className="title">
                                        Empowering Your Drive One Repair at a Time
                                    </h2>
                                    <div className="te-section-desc">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit platea
                                            pharetra, nostra mattis hendrerit proin mollis pretium
                                            facilisi in, ligula volutpat lobortis molestie sed design
                                            accumsan conubia. Sed design by
                                        </p>
                                    </div>
                                    <div className="te-list-item-wrapper">
                                        <div className="te-list-item style-1">
                                              <span className="icon">
                                                <i className="fa-regular fa-check" />
                                              </span>
                                            <span className="text">Precision Automotive Services</span>
                                        </div>
                                        <div className="te-list-item style-1">
                                          <span className="icon">
                                            <i className="fa-regular fa-check" />
                                          </span>
                                            <span className="text">
                                            Drive worry-free thanks to our repair mastery
                                          </span>
                                        </div>
                                        <div className="te-list-item style-1">
                                              <span className="icon">
                                                <i className="fa-regular fa-check" />
                                              </span>
                                            <span className="text">
                                            Restoring your car's power, one repair at a time
                                          </span>
                                        </div>
                                        <div className="te-list-item style-1">
                                          <span className="icon">
                                            <i className="fa-regular fa-check" />
                                          </span>
                                            <span className="text">
                                            Driving excellence, one repair at a time
                                          </span>
                                        </div>
                                    </div>
                                    <div className="te-theme-btn-wrapper mt-2">
                                        <Link to="/services" className="te-theme-btn style-2">
                                            READ MORE
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="te-about-image-card">
                                <div className="te-main-img-wrapper">
                                    <div className="te-main-img-inner">
                                        <div className="about-img-one">
                                            <img
                                                className="tilt-animate"
                                                src="../../images/about/about-1.jpg"
                                                alt="about card img"
                                            />
                                            <div className="about-img-two">
                                                <img
                                                    className="tilt-animate"
                                                    src="../../images/about/about-2.jpg"
                                                    alt="about card shape image"
                                                />
                                            </div>
                                        </div>
                                        <div className="te-company-foundation-wrapper">
                                            <div className="te-company-foundation">
                                                <div className="te-company-experience">
                                                    <div className="icon">
                                                        <img src="../../images/icon/users.png" alt="icon" />
                                                    </div>
                                                    <div className="te-counter-wrapper">
                                                        <h1 className="counter">6.5</h1>
                                                        <span className="suffix">k+</span>
                                                    </div>
                                                </div>
                                                <span className="title">Trusted Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose Us Area End */}
        </>
    );
};

export default AboutV3;