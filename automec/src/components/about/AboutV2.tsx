import React from 'react';

const AboutV2 = () => {
    return (
        <>
            {/* About Us Area Start */}
            <div className="about-us-area style-2">
                <div className="about-us-image-left background-black">
                    <div className="about-us-image-inner-left">
                        <img src="../../images/section-bg/about-bg.png" alt="image" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 align-self-center">
                            <div className="te-about-info-card">
                                <div className="te-about-info-content">
                                    <div className="te-section-title">
                                        <div className="te-section-content">
                                            <div>
                                                <span className="short-title only-divider">ABOUT US</span>
                                            </div>
                                            <h2 className="title text-white">
                                                Best Wind solution &amp; Renewable
                                            </h2>
                                            <div className="te-section-desc text-white">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    platea pharetra, nostra mattis hendrerit proin mollis
                                                    pretium facilisi in, ligula volutpat lobortis molestie sed
                                                    per accumsan conubia. Sed dis
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="te-contact-info">
                                        <div className="te-icon-card style-1">
                                            <div className="icon">
                                                <img
                                                    src="../../images/icon/icon-card/v-1/icon-1.png"
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Car Care Specialists</h3>
                                                <span className="desc">
                                                  Customer satisfaction is crucial for amohlodi business
                                                  leads{" "}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="te-icon-card style-1">
                                            <div className="icon">
                                                <img
                                                    src="../../images/icon/icon-card/v-1/icon-2.png"
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Quality Auto Repairs</h3>
                                                <span className="desc">
                                                  Customer satisfaction is crucial for amohlodi business
                                                  leads{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-us-image">
                    <div className="about-us-image-inner">
                        <img src="../../images/section-bg/about-sec-bg.jpg" alt="image" />
                    </div>
                </div>
            </div>
            {/* About Us Area End */}
        </>
    );
};

export default AboutV2;