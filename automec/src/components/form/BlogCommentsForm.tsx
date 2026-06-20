"use client";
import React from 'react';

const BlogCommentsForm = () => {

    return (
        <>
            <div className="te-post-comments-form">
                <div className="te-comment-respond">
                    <div className="te-post-comments-title">
                        <h2>Add A Comment</h2>
                    </div>
                    <form className="te-comment-form">
                        <div className="row gx-4">
                            <div className="col-xl-6">
                                <div className="te-contacts-name">
                                    <input name="author" type="text" placeholder="Your name*" autoComplete='off' required />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="te-contacts-email">
                                    <input name="email" type="email" placeholder="Your email*" autoComplete='off' required />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="te-contacts-name">
                                    <input name="phone" type="number" className='no-arrows' placeholder="Your phone" autoComplete='off' required />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="te-contacts-name">
                                    <input name="website" type="text" placeholder="Your website" autoComplete='off' required />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="te-contacts-message">
                                    <textarea name="comment" cols={20} rows={3}
                                        placeholder="Start writing comment" required></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="te-theme-btn style-2" type="submit">Post Comment <i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BlogCommentsForm;