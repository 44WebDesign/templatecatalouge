import React from 'react';
import { Link } from "react-router-dom";
import SocialShare from '../slider/SocialShare';
import BlogAuthor from './BlogAuthor';
import BlogComments from './BlogComments';
import BlogCommentsForm from '../form/BlogCommentsForm';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostWidget from '../widgets/RecentPostWidget';
import CategoriesWidget from '../widgets/CategoriesWidget';
import TagsWidget from '../widgets/TagsWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import SocialWidget from '../widgets/SocialWidget';

type BlogPostDataProps = {
    id: number,
    thumbFull: string;
    title: string;
    date: string;
    author: string;
    comments: string;
}

const BlogPostContent = ({ blogPostData }: { blogPostData: BlogPostDataProps }) => {
    const { thumbFull, title, date, author, comments } = blogPostData;

    return (
        <>
            <div className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 te-blog-details-wrapper">
                            <article className="te-post-item">
                                <div className="te-post-thumbnail">
                                    <Link to="#">
                                        <img src={`../../images/blog/${thumbFull}`} alt={title} />
                                    </Link>
                                </div>
                                <div className="te-post-content-wrapper">
                                    <div className="te-post-meta">
                                        <span><i className="far fa-calendar-check"></i>{date}</span>
                                        <span><Link to="#"><i className="far fa-user"></i>By {author}</Link></span>
                                        <span><Link to="#"><i className="far fa-comments"></i>{comments} Comments</Link></span>
                                    </div>
                                    <h3 className="te-post-title">
                                        <Link to="#">{title}</Link>
                                    </h3>
                                    <div className="te-post-content">
                                        <p>
                                            Aliquam eros justo, posuere loborti vivera laoreet matti ullamcorper posuere
                                            viverra Aliquam eros one justo, posuere lobortis, viverra laoreet augue
                                            mattis fermentum ullamcorper viverra
                                        </p>
                                        <p>
                                            Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper pouere
                                            viverra .Aliquam eros one justo, posuere lobortis, viverra laoreet augue
                                            mattis fermentum ullamcorper viverra ullcorper a the a man posuere viverra
                                            Aliqerojustoposuere loborti viverra laoreet matti ullamcorper posuere
                                            viverra the Aliquam eros justo, posuere lobortis non, Aliquam eros justo,
                                            posuere{" "}
                                        </p>
                                        <blockquote>
                                            <p>
                                                Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
                                                posuere viverra .Aliquam eros one of justo, posuere lobortis, viverra
                                                laoreet augue mattis fermentum ullamcorper vi ullamcorper a the a the man
                                                posuere viverra Aliqerojustoposuere loborti viverra laoreet matti
                                                ullamcorp posuere viverra the anf .Aliquam eros justo, posuere lobortis
                                                non, Aliquam
                                            </p>
                                            <footer>- Jahirul Islam Sifat, Car Service</footer>
                                        </blockquote>
                                        <p>
                                            Aliquam eros justo, posuere loborti viverra laoreet matti lamcorper posuere
                                            viverra .Aliquam eros one justo, posuere lobortis, viverra laoreet augue
                                            mattis fermentum ullamcorper viverra ullcorper a the a man posuere viverra
                                            Aliqerojustoposuere loborti viverra laoreet matti ullamcorper posuere
                                            viverra the .Aliquam eros justo, posuere lobortis non, Aliquam eros justo,
                                            posuere{" "}
                                        </p>
                                        <div className="row gy-4 mb-4">
                                            <div className="col-md-6">
                                                <div className="blog-gallery">
                                                    <img
                                                        className="rounded"
                                                        src="../../images/blog-detail/b-gallery-one.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="blog-gallery">
                                                    <img
                                                        className="rounded"
                                                        src="../../images/blog-detail/b-gallery-two.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <h4>Efficiency in Every Exhaust</h4>
                                        <ul>
                                            <li>Fueling Commerce One Delivery at a Time</li>
                                            <li>Mastering the Art of Efficient Movement</li>
                                            <li>Efficiency in Motion, Every Mile</li>
                                            <li>Navigating Your World Seamlessly</li>
                                        </ul>
                                        <p>
                                            Aliquam eros justo, posuere loborti viverra laoreet matti lamcorper posuere
                                            viverra .Aliquam eros one justo, posuere lobortis, viverra laoreet augue
                                            mattis fermentum ullamcorper viverra ullcorper a the a man posuere viverra
                                            Aliqerojustoposuere loborti viverra laoreet matti ullamcorper posuere
                                            viverra the .Aliquam eros justo, posuere lobortis non, Aliquam eros justo,
                                            posuere{" "}
                                        </p>
                                    </div>

                                    <div className="te-single-post-meta">
                                        <div className="te-blog-post-tag">
                                            <span>TAGS</span>
                                            <div className="te-post-tag-list">
                                                <Link to="#">Auto Repairs</Link>
                                                <Link to="#">Fuel Efficiency</Link>
                                                <Link to="#">Car Detailing</Link>
                                            </div>
                                        </div>
                                        <div className="te-social-share">
                                            <span className="te-social-share-title">SHARE</span>
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="te-blog-post-nav">
                                <div className="te-post-navigation">
                                    <Link to="#" className="te-post-img">
                                        <img src="../../images/blog/r1.jpg" alt="blog 1" />
                                    </Link>
                                    <div className="text">
                                        <h4>
                                            <Link to="#" rel="prev">
                                                Protect Your Home With A Solid Roof
                                            </Link>{" "}
                                        </h4>
                                        <span>March 8, 2023 . Investor</span>
                                    </div>
                                </div>
                                <div className="te-post-navigation">
                                    <Link to="#" className="te-post-img">
                                        <img src="../../images/blog/r2.jpg" alt="blog 1" />
                                    </Link>
                                    <div className="text">
                                        <h4>
                                            <Link to="#" rel="next">
                                                Trustworthy Roofing Services No Shortcuts
                                            </Link>{" "}
                                        </h4>
                                        <span>March 8, 2023 . Investor</span>
                                    </div>
                                </div>
                            </div>
                            <BlogAuthor />
                            <div className="te-post-comments">
                                <div className="te-comment-title">
                                    <h2>14 Comments Found</h2>
                                </div>
                                <BlogComments />
                            </div>
                            <BlogCommentsForm />
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

export default BlogPostContent;