import React from 'react';
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import BlogPageContent from '../../components/blog/BlogPageContent';
import FooterV1 from "../../components/footer/FooterV1";

const Blog = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Blog" breadcrumb="blog" />
            <BlogPageContent />
            <FooterV1 />
        </>
    );
};

export default Blog;