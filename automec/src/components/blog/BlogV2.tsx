import React from 'react';
import BlogV2Data from '../../jsonData/blog/BlogV2Data.json'
import SingleBlogV2 from './SingleBlogV2';
import { Link } from "react-router-dom";

const BlogV2 = () => {
    return (
        <>
            {/* Latest Posts Area Start */}
            <div className="latest-posts-area style-2 te-py-120">
                <div className="container">
                    {/* Section Title Start */}
                    <div className="row">
                        <div className="col-12">
                            <div className="te-section-title left-align-title">
                                <div className="te-section-content">
                                    <div className="short-title-wrapper">
                                        <span className="short-title">Latest Blog</span>
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
                        </div>
                    </div>
                    {/* Section Title End */}
                    <div className="row gy-5">
                        {BlogV2Data.slice(0, 2).map((item, index) =>
                            <SingleBlogV2 key={item.id} item={item} index={index} />
                        )}
                    </div>
                </div>
            </div>
            {/* Latest Posts Area End */}
        </>
    );
};

export default BlogV2;