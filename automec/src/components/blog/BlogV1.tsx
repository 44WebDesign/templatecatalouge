import React from 'react';
import SingleBlogV1 from './SingleBlogV1';
import BlogV1Data from '../../jsonData/blog/BlogV1Data.json'
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

const BlogV1 = () => {
    return (
        <>
            {/* Latest Posts Area Start */}
            <div className="latest-posts-area style-1 position-relative te-py-120">
                <div className="sec-shape">
                    <img src="../../images/shape/wheel-shape.png" alt="image" />
                </div>
                <div className="container">
                    {/* Section Title Start */}
                    <div className="row">
                        <motion.div
                            className="col-12"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="te-section-title left-align-title">
                                <div className="te-section-content">
                                    <div className="short-title-wrapper">
                                        <span className="short-title only-divider">Latest Blog</span>
                                    </div>
                                    <h2 className="title">
                                        Explore Our Recent Articles <br /> from the News Pres
                                    </h2>
                                </div>
                                <div className="te-section-desc">
                                    <div className="te-theme-btn-wrapper">
                                        <Link to="/blog" className="te-theme-btn style-2">
                                            VIEW MORE <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* Section Title End */}
                    <div className="row gy-4">
                        {BlogV1Data.slice(0, 3).map((item, index) =>
                            <SingleBlogV1 key={item.id} item={item} index={index} />
                        )}
                    </div>
                </div>
            </div>
            {/* Latest Posts Area End */}
        </>
    );
};

export default BlogV1;