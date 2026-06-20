import React from 'react';
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import LatestServiceV1 from "../../components/latestService/LatestServiceV1";
import FooterV1 from '../../components/footer/FooterV1';
import PricingPlansStyleTwo from "../../components/pricingPlans/PricingPlansStyleTwo";


const Services = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Services" breadcrumb="services" />
            <LatestServiceV1 partial={false} />
            <PricingPlansStyleTwo style="pt-0 te-pb-120"/>
            <FooterV1 />
        </>
    );
};

export default Services;