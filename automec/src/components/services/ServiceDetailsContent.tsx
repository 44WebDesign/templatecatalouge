import React from 'react';
import { Link } from "react-router-dom";

type serviceInfoData = {
    title: string;
}
const ServiceDetailsContent = ({ serviceInfo } : { serviceInfo:serviceInfoData }) => {
    const { title } = serviceInfo
    return (
        <>
            {/* Service Details Page Start !*/}
            <div className="service-details-page">
                <div className="container">
                    <div className="row">
                        {/* Service Details Content Start */}
                        <div className="col-lg-8">
                            <div className="te-service-details-wrapper">
                                <div className="service-details">
                                    <div className="image">
                                        <img src="../../images/service/service-details.jpg" alt="Image" />
                                    </div>
                                    <div className="content">
                                        <div className="te-title-wrapper">
                                            <div className="title-inner">
                                                <h3 className="title">{title}</h3>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Aliquam eros justo, posuere loborti viverra laoreet matti
                                                ullamcorper posuere viverra Aliquam an eros justo, posuere
                                                lobortis viverra laoreet augue mattis fermentum ullamcorper
                                                viverra laoreet Aliquam eros ju posuere loborti viverra
                                                laoreet matti ullamcorper posuere viverra .Aliquam eros
                                                justo, posu obortis non, viverra Aliquam eros justo, posuere
                                                loborti viverra laoreet matti ullamcorper posuere viverra
                                                .Aliquam an eros justo, posuere lobortis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gy-4 mt-3">
                                    <div className="col-md-6">
                                        <div className="gallery-wrapper">
                                            <img
                                                className="rounded"
                                                src="../../images/service/gallery-one.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="gallery-wrapper">
                                            <img
                                                className="rounded"
                                                src="../../images/service/gallery-two.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="service-details-overview">
                                    <h3 className="mb-0">We Make Your Ideas Shine</h3>
                                    <p>
                                        Aliquam eros justo, posuere loborti viverra laoreet matti
                                        ullamcorper posuere viverra Aliquam an eros justo, posuere
                                        lobortis viverra laoreet augue mattis fermentum ullamcorper
                                        viverra laoreet Aliquam eros ju posuere loborti viverra laoreet
                                        matti ullamcorper posuere viverra .Aliquam eros justo, posu
                                        obortis non, viverra Aliquam eros justo, posuere loborti viverra
                                        laoreet matti ullamcorper posuere viverra .Aliquam an eros
                                        justo, posuere lobortis
                                    </p>
                                    <div className="te-list-item-wrapper">
                                        <div className="te-list-item style-1">
                                              <span className="icon">
                                                <i className="fa-regular fa-check" />
                                              </span>
                                            <span className="text">We Put the 'Car' in Caring</span>
                                        </div>
                                        <div className="te-list-item style-1">
                                              <span className="icon">
                                                <i className="fa-regular fa-check" />
                                              </span>
                                            <span className="text">Elite Performance Rehab</span>
                                        </div>
                                        <div className="te-list-item style-1">
                                              <span className="icon">
                                                <i className="fa-regular fa-check" />
                                              </span>
                                            <span className="text">Your Road to Reliable Repairs</span>
                                        </div>
                                        <div className="te-list-item style-1">
                                                  <span className="icon">
                                                    <i className="fa-regular fa-check" />
                                                  </span>
                                            <span className="text">Precision in Every Piston</span>
                                        </div>
                                    </div>
                                    <p>
                                        Aliquam eros justo, posuere loborti viverra laoreet matti ullam
                                        corper posuere viverra .Aliquam eros justo, posuere lobortis
                                        viverra laoreet augue mattis fermentum ullamcorper viverra
                                        laoreet Aliquas justo, posuere loborti viverra laoreet matti
                                        ullamcorper posuere viverra
                                    </p>
                                    <div className="content">
                                        <h4>Repairs &amp; Upgrades</h4>
                                        <p>
                                            Aliquam eros justo, posuere loborti vive rra laoreet matti
                                            ullamc orper posu ere viverra .Aliquam eros justo, posuer
                                            lobortis non, vive rra laoreet augue mattis fermentum
                                            ullamcorper viverra laore Aliquam eros justo, posuere
                                            loviverra laoreet mat ullamcorper posue viverra .Aliquam eros
                                            justo, posuere lobor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Service Details Content End */}
                        {/* sidebar Start */}
                        <div className="col-lg-4">
                            <div className="service-sidebar">
                                <div className="widget te_widget_categories">
                                    <div className="te-widget-title">
                                        <h4 className="wp-block-heading">Services List</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="#">Gearbox Guru</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Turbo Tech Services</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Pro Drive Repairs</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Consumer Sector</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Apex Auto Clinic</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Precision Auto</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget te_widget_pdf">
                                    <div className="te-widget-title">
                                        <h4 className="wp-block-heading">Brochure</h4>
                                    </div>
                                    <Link to="#" className="pdf-download-btn">
                                        <div className="icon">
                                            <i className="fa-light fa-file-pdf" />
                                        </div>
                                        <div className="content">
                                            <span className="title">Download Brochure</span>
                                        </div>
                                    </Link>
                                    <Link to="#" className="pdf-download-btn">
                                        <div className="icon">
                                            <i className="fa-light fa-file-pdf" />
                                        </div>
                                        <div className="content">
                                            <span className="title">Company Details</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* sidebar Start */}
                    </div>
                </div>
            </div>
            {/* Service Details Page End !*/}
        </>
    );
};

export default ServiceDetailsContent;