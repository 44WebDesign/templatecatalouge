import React from 'react';
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ServiceDetailsContent from '../../components/services/ServiceDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import FeatureV1Data from '../../jsonData/latestService/LatestServiceV1Data.json';

const ServiceDetails = () => {
    const { id } = useParams();

    const serviceId = id ? parseInt(id) : null;
    const data = serviceId ? FeatureV1Data.filter(service => service.id === serviceId)[0] : null;

    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Service Details" breadcrumb="service-details" />
            {data ? (
                <ServiceDetailsContent serviceInfo={data} />
            ) : (
                <p>Service not found</p>
            )}
            <FooterV1 />
        </>
    );
};

export default ServiceDetails;
