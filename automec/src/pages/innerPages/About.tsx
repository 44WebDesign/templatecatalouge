import React from 'react';
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import AboutV3 from "../../components/about/AboutV3";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import BrandV1 from "../../components/brand/BrandV1";
import AboutV1 from "../../components/about/AboutV1";
import ProcessV1 from "../../components/process/ProcessV1";
import FooterV1 from "../../components/footer/FooterV1";


const About = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="About Us" breadcrumb="about" />
            <AboutV3 style="te-pt-120"/>
           <TestimonialV1 style="te-pb-120"/>
           <BrandV1 />
           <AboutV1 />
           <ProcessV1 style="te-pb-120"/>
           <FooterV1 />
        </>
    );
};

export default About;