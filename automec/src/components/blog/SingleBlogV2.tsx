import React from 'react';
import { Link } from "react-router-dom";
import {motion} from "framer-motion";


type itemData = {
    id: number;
    date: string;
    thumb: string;
    title: string;
    text: string;
    comments: string;
}

const SingleBlogV2 = ({ item, index } : { item: itemData; index: number } ) => {
    const { id, date, thumb, title, text, comments } = item
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className="col-md-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >

                <div className="te-post-card style-2">
                    <div className="image">
                        <img src={`/images/latest-post//v-2/${thumb}`} alt="post" />
                    </div>
                    <div className="content">
                        <div className="te-post-meta-info">
                            <div className="te-single-meta">
                                  <span className="icon">
                                    <i className="fa-regular fa-calendar-days" />
                                  </span>
                                <span className="text">{date}</span>
                            </div>
                            <div className="te-single-meta">
                              <span className="icon">
                                <i className="fa-solid fa-comments" />
                              </span>
                                <span className="text">Comments ({comments})</span>
                            </div>
                        </div>
                        <h3 className="title">
                            <Link to={`/blog-details/${id}`}>{title}</Link>
                        </h3>
                        <div className="te-post-content">
                            <p>{text}</p>
                        </div>
                        <Link to={`/blog-details/${id}`} className="te-theme-btn">
                            READ MORE
                            <i className="fa-light fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleBlogV2;