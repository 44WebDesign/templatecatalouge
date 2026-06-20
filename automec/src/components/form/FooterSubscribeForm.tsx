"use client";
import React from 'react';

const FooterSubscribeForm = () => {
    return (
        <>
            <div className="te-subscribe-form-widget">
                <form>
                    <div className="mc4wp-form-fields">
                        <div className="single-field">
                            <input type="email" name='email' placeholder="Email here" autoComplete='off' required />
                        </div>
                        <button className="submit-btn" type="submit"><i
                            className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FooterSubscribeForm;