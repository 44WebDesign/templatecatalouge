import React from 'react';

const AppointmentFormV2 = () => {

    return (
        <>
            {/* Appointment Area Start */}
            <div className="appointment-area style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* Comment Form Start */}
                            <div className="te-comment-respond style-3 mt-0">
                                <div className="te-section-title">
                                    <div className="te-section-content">
                                        <div className="short-title-wrapper">
                                            <span className="short-title only-divider">Ask question</span>
                                        </div>
                                        <h2 className="title text-white">
                                            Bringing Your Drive <br /> Back to Life
                                        </h2>
                                        <div className="te-section-desc">
                                            <p className="text-white">
                                                Et purus duis sollicitudin dignissim habitant. Egestas nulla{" "}
                                                <br /> quis venenatis cras sed Et purus duis sollicihabitan
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <form action="#" method="post" className="te-comment-form">
                                    <div className="row gx-4">
                                        <div className="col-xl-6">
                                            <div className="te-contacts-email">
                                                <input name="name" type="text" placeholder="Your Name*" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="te-contacts-email">
                                                <input name="email" type="text" placeholder="Your Email*" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="te-contacts-name">
                                                <input name="phone" type="text" placeholder="Your Phone" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="te-contacts-name">
                                                <input name="subject" type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="te-contacts-message">
                                                <textarea
                                                    name="comment"
                                                    cols={20}
                                                    rows={3}
                                                    placeholder="Write your Message here"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="te-theme-btn" type="submit">
                                                SEND NOW
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Comment Form End */}
                        </div>
                    </div>
                </div>
                <div className="appointment-image">
                    <div className="appointment-image-inner">
                        <img src="../../images/section-bg/appointment-two-bg.jpg" alt="image" />
                    </div>
                </div>
            </div>
            {/* Appointment Area End */}
        </>
    );
};

export default AppointmentFormV2;