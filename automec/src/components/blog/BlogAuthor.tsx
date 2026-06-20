import React from 'react';
import SocialShare from '../slider/SocialShare';
import { Link } from "react-router-dom";

const BlogAuthor = () => {
    return (
        <>
            {/* Post Author Start */}
            <div className="te-author-info">
                <div className="te-author-text">
                    <div className="te-post-author-info">
                        <div className="te-author-thumb">
                            <Link to="#">
                                <img
                                    alt=""
                                    src="../../images/blog/avatar.jpg"
                                    className="avatar"
                                    height={120}
                                    width={120}
                                />
                            </Link>
                        </div>
                        <div className="te-post-author-content">
                            <h3>
                                <Link to="#">David Max</Link>
                            </h3>
                            <span className="designation">Stuff Writer</span>
                            <div className="te-author-social-profiles">
                                <SocialShare />
                            </div>
                        </div>
                    </div>
                    <p>
                        Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis
                        fermentuer viverra laoreet Aliqerojustoposuere loborti viverra laoreet
                        matti ullamcorper posuere viverra .Aliquam eros justo laoreet augue
                        mattis fermentuer viverra laoreet{" "}
                    </p>
                    <div className="te-author-post">
                        <Link to="#">View All Posts</Link>
                    </div>
                </div>
            </div>
            {/* Post Author End */}
        </>
    );
};

export default BlogAuthor;