import React from 'react';
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import BlogPostContent from '../../components/blog/BlogPostContent';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import BlogPageData from '../../jsonData/blog/BlogPageData.json';

const BlogDetails = () => {
    const { id } = useParams();

    const blogId = id ? parseInt(id) : null;

    const data = blogId ? BlogPageData.filter(blog => blog.id === blogId)[0] : null;

    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Blog Details" breadcrumb="blog-details" />
            {data ? (
                <BlogPostContent blogPostData={data} />
            ) : (
                <p>Blog not found</p>
            )}
            <FooterV1 />
        </>
    );
};

export default BlogDetails;
