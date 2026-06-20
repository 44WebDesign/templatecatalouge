const SubscribeFormV1 = () => {
    return (
        <>
            {/* Newsletter Section Start*/}
            <div className="subscribe-area style-1 background-red">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="subscribe-image">
                                <img src="../../images/section-bg/subscribe-bg.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="te-content-wrapper">
                                <h2 className="te-subscribe-title text-white">Get Free Estimate</h2>
                                <p className="text text-white">
                                    Lorem Ipsum is simply is dumiomy is text Lorem Ipsum{" "}
                                </p>
                                <div className="te-subscribe-form-wrapper">
                                    <div className="te-subscribe-form-widget style-2">
                                        <form>
                                            <div className="mc4wp-form-fields">
                                                <div className="single-field">
                                                    <input type="email" placeholder="Enter E-mail" />
                                                </div>
                                                <button className="submit-btn" type="submit">
                                                    SUBSCRIBE
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Newsletter Section End*/}
        </>
    );
};

export default SubscribeFormV1;