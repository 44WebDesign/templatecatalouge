import React from 'react';
import { motion } from 'framer-motion';

const NewsLetterV1 = () => {

    return (
        <>
                <motion.div
                    className="subscribe-area style-1"
                    initial={{ rotateY: -90, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                >
                    <div className="circle-drop-shadow"></div>
                    <div className="circle-drop-shadow two"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2">
                                <div className="te-section-title justify-content-center text-center">
                                    <div className="te-section-content">
                                        <div className="short-title-wrapper">
                                            <span className="short-title">Newsletter</span>
                                        </div>
                                        <h2 className="title">Technology Making the <br/> world a smaller</h2>
                                        <p>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. The point of using Lorem </p>
                                    </div>
                                </div>
                                <div className="te-subscribe-form-widget">
                                    <form>
                                        <div className="mc4wp-form-fields">
                                            <div className="single-field">
                                                <input type="email" placeholder="Enter Your Email"/>
                                            </div>
                                            <button className="submit-btn" type="submit">Subscribe Now <i
                                                className="fa fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
        </>
    );
};

export default NewsLetterV1;