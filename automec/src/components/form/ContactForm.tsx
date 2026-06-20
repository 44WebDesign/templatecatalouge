import React from 'react';

const ContactForm = () => {

    return (
        <>
            {/* Comment Form Start */}
            <div className="te-comment-respond mt-0">
                <form action="#" method="post" className="te-comment-form">
                    <h3>
                        We Can Take Your <br /> Business To Growth
                    </h3>
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
                            <button className="te-theme-btn style-2" type="submit">
                                SEND NOW
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* Comment Form End */}
        </>

    );
};

export default ContactForm;