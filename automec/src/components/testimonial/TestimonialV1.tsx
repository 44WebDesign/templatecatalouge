import React, { useRef } from 'react';
import Slider from 'react-slick';
import SingleTestimonialV1 from './SingleTestimonialV1';
import TestimonialV1Data from '../../jsonData/testimonial/TestimonialV1Data.json'
import {Link} from "react-router-dom";
type AddStyleProps = {
    style?: string;
};

const TestimonialV1 = ( { style } : AddStyleProps ) => {

    const sliderRef = useRef<Slider>(null);

    const handlePrevious = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 1500,
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    }

    return (
        <>
            {/* Testimonial Area Start */}
            <div className={`testimonial-slider-area style-1 ${style}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonial-image">
                                <img src="../../images/section-bg/testimonial-image.jpg" alt="image" />
                            </div>
                            <div className="te-slider-btn-wrapper style-1 mt-3">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePrevious();
                                    }}
                                    className="te-slider-nav te-slider-prev"
                                    id="testimonial_slider_prev"
                                >
                                    <i className="fa-solid fa-angle-left"></i>
                                </Link>

                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNext();
                                    }}
                                    className="te-slider-nav te-slider-next"
                                    id="testimonial_slider_next"
                                >
                                    <i className="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="te-section-title">
                                <div className="te-section-content">
                                    <div className="short-title-wrapper">
                                        <span className="short-title only-divider">
                                          Clients testimonial
                                        </span>
                                    </div>
                                    <h2 className="title">
                                        Performance that <br /> Speaks Volumes
                                    </h2>
                                </div>
                            </div>
                            <div className="te-testimonial-slider-wrapper" id="testimonial_two">
                                <Slider {...settings} ref={sliderRef}>
                                    {TestimonialV1Data.map(testimonial =>
                                        <div className="te-slick-item" key={testimonial.id}>
                                            <SingleTestimonialV1 testimonial={testimonial} />
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial Area End */}
        </>
    );
};

export default TestimonialV1;