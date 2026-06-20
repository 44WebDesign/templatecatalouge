import React from 'react';
import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from "./ContactMap";

const ContactContent = () => {
    return (
        <>
            {/* Contact Form Section Start */}
            <div className="contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="te-map-widget">
                                <ContactMap />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form Section End */}
            <div className="contact-form te-pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactContent;