import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ModalVideo from 'react-modal-video';
import Pagination from '../others/Pagination';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostWidget from '../widgets/RecentPostWidget';
import CategoriesWidget from '../widgets/CategoriesWidget';
import TagsWidget from '../widgets/TagsWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import SocialWidget from '../widgets/SocialWidget';
import BlogPageData from '../../jsonData/blog/BlogPageData.json'
import SingleBlogPost from './SingleBlogPost';

const BlogPageContent = () => {

    const [isOpen, setOpen] = useState(false);


    return (
        <>
            <div className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 te-blog-post">
                            <article className="te-post-item format-image">
                                <div className="te-post-thumbnail">
                                    <Link to="/blog-details/1">
                                        <img
                                            src="/images/blog/b1.jpg"
                                            alt="Blog Image"
                                            width={850}
                                            height={390}
                                        />
                                    </Link>
                                </div>
                                {BlogPageData.slice(0, 1).map(post =>
                                    <SingleBlogPost post={post} key={post.id} />
                                )}
                            </article>
                            <article className="te-post-item format-video">
                                <div className="post-video">
                                    <img
                                        src="/images/blog/b2.jpg"
                                        alt="Blog Image"
                                        width={850}
                                        height={390}
                                    />
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
                                    <div className="popup-video-wrapper">
                                        <div className="video-btn">
                                            <Link
                                                to="#"
                                                className="mfp-iframe video-play"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpen(true);
                                                }}
                                            >

                                                  <i className="fa-solid fa-play" aria-hidden="true"></i>

                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {BlogPageData.slice(1, 2).map(post =>
                                    <SingleBlogPost post={post} key={post.id} />
                                )}
                            </article>
                            <article className="te-post-item format-gallery">
                                <div className="post-gallery position-relative">
                                    <img
                                        src="/images/blog/b4.jpg"
                                        alt="Blog Image"
                                        width={850}
                                        height={390}
                                    />
                                </div>
                                {BlogPageData.slice(2, 3).map(post =>
                                    <SingleBlogPost post={post} key={post.id} />
                                )}
                            </article>
                            <article className="te-post-item format-audio">
                                <div className="post-audio embed-responsive">
                                    <iframe
                                        src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F666328004&amp;show_artwork=true&amp;maxheight=960&amp;maxwidth=640"
                                        data-dashlane-frameid="695"
                                    ></iframe>
                                </div>
                                {BlogPageData.slice(3, 4).map(post =>
                                    <SingleBlogPost post={post} key={post.id} />
                                )}
                            </article>
                            <article className="te-post-item format-image">
                                <div className="te-post-thumbnail">
                                    <Link to="/blog-details/1">
                                        <img
                                            src="/images/blog/b3.jpg"
                                            alt="Blog Image"
                                            width={850}
                                            height={390}
                                        />
                                    </Link>
                                </div>
                                {BlogPageData.slice(4, 5).map(post =>
                                    <SingleBlogPost post={post} key={post.id} />
                                )}
                            </article>
                            <Pagination alignment="justify-content-left"/>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="sidebar">
                                <SearchWidget />
                                <RecentPostWidget />
                                <CategoriesWidget />
                                <TagsWidget />
                                <GalleryWidget />
                                <SocialWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPageContent;