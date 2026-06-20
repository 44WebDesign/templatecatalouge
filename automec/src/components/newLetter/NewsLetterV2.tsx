import React from 'react';

const NewsLetterV2 = () => {

    return (
        <>
            {/* News Letter Section Start */}
            <div className="newsletter-sec background-gray-100">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-7">
                            <div className="newsletter-text">
                                <div className="newsletter-icon">
                                    <img src="images/icon/newsletter-icon.png" alt="icon" />
                                </div>
                                <div className="newsletter-text">
                                    <h2 className="title">
                                        Your Car's Sanctuary Our Repair Expertise
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <div className="te-subscribe-form-widget style-3">
                                <form>
                                    <div className="mc4wp-form-fields">
                                        <div className="single-field">
                                            <input type="email" placeholder="Enter E-mail" />
                                        </div>
                                        <button className="submit-btn text-white" type="submit">
                                            SUBSCRIBE <i className="fa-solid fa-paper-plane" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* News Letter Section End */}
        </>
    );
};

export default NewsLetterV2;