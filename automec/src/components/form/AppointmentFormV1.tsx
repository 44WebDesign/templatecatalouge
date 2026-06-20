import React from 'react';

const AppointmentFormV1 = () => {

    return (
        <>
            {/* Appointment Area Start */}
            <div
                className="appointment-area style-1"
                style={{ backgroundImage: 'url("../../images/section-bg/appointment-bg.jpg")' }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* Comment Form Start */}
                            <div className="te-comment-respond style-2 mt-0">
                                <h2 className="title text-white">Get A Quote</h2>
                                <form action="#" method="post" className="te-comment-form">
                                    <div className="row gx-4">
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
            </div>
            {/* Appointment Area End */}
        </>
    );
};

export default AppointmentFormV1;