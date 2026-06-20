import React from 'react';
import { Link } from "react-router-dom";

type blogData = {
    thumb: string;
    date: string;
    title: string;
}

const SingleFooterBlogV1 = ({ blog } : { blog: blogData } ) => {
    const { thumb, date, title } = blog

    return (
        <>
            <li>
                <div className="te-latest-post-thumb">
                    <img
                        src={`../../images/blog/${thumb}`}
                        alt="Image"
                        width={120}
                        height={120}
                    />

                </div>
                <div className="te-latest-post-desc">
                    <span className="te-latest-post-meta">{date}</span>
                    <h3 className="te-latest-post-title">
                        <Link to="/blog-details/1">{title}</Link>
                    </h3>
                </div>
            </li>
        </>
    );
};

export default SingleFooterBlogV1;