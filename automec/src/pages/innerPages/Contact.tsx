import React from 'react';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ContactContent from '../../components/contact/ContactContent';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV1 from "../../components/header/HeaderV1";

const Contact = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Contact" breadcrumb="Contact" />
            <ContactContent />
            <FooterV1 />
        </>
    );
};

export default Contact;