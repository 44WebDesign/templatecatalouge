const AboutV1 = () => {

    return (
        <>
            <div className="about-us-area style-1">
                <div className="about-us-image">
                    <div className="about-us-image-inner">
                        <img src="../../images/section-bg/about-sec-bg.jpg" alt="image" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-4 align-self-center">
                            <div
                                className="te-about-info-card background-black"
                                style={{ backgroundImage: 'url("../../images/section-bg/about-bg.png")' }}
                            >
                                <div className="te-about-info-content">
                                    <div className="te-section-title">
                                        <div className="te-section-content">
                                            <div>
                                                <span className="short-title only-divider">ABOUT US</span>
                                            </div>
                                            <h2 className="title text-white">
                                                Driving Confidence One Repair at a Time
                                            </h2>
                                            <div className="te-section-desc text-white">
                                                <p>
                                                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                                                    quis venenatis cras sed Et purus duis sollicitudin dignissim
                                                    habitan
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="te-contact-info">
                                        <div className="te-icon-card style-1">
                                            <div className="icon">
                                                <img src="../../images/icon/icon-card/v-1/icon-1.png" alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Air Conditioning Maintenance</h3>
                                                <span className="desc">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed Et purus duis sollicitudin
                  </span>
                                            </div>
                                        </div>
                                        <div className="te-icon-card style-1">
                                            <div className="icon">
                                                <img src="../../images/icon/icon-card/v-1/icon-2.png" alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Oil Change &amp; Filter Replacement</h3>
                                                <span className="desc">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed Et purus duis sollicitudin
                  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;