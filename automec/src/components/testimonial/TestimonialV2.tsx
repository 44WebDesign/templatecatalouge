import React, { useRef } from 'react';
import TestimonialV2Data from '../../jsonData/testimonial/TestimonialV2Data.json'
import SingleTestimonialV2 from './SingleTestimonialV2';
import Slider from 'react-slick';

const TestimonialV2 = () => {
    const sliderRef = useRef<Slider>(null);


    const settings = {
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                },
            }
        ],
    }

    return (
        <>
            {/* Testimonial Area Start */}
            <div className="testimonial-slider-area style-2 te-py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-image">
                                <img
                                    src="images/section-bg/testimonial-image-two.jpg"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 te-pt-120">
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
                                    {TestimonialV2Data.map(testimonial =>
                                        <div key={testimonial.id}>
                                            <SingleTestimonialV2 testimonial={testimonial} key={testimonial.id} />
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

export default TestimonialV2;