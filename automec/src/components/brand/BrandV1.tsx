import Slider from 'react-slick';
import React, {useRef} from "react";

const BrandV1 = () => {
    const sliderRef = useRef<Slider>(null);


    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 5,
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
            {/* Brand Slider Area Start */}
            <div
                className="brand-slider-area style-1 background-red"
                style={{ backgroundImage: 'url("images/section-bg/brand-slider-bg.png")' }}
            >
                <div className="container p-sm-0">
                    <div className="client-logo-slider-wrapper">
                        <Slider {...settings} ref={sliderRef}>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-1.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-2.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-3.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-4.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-5.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-1.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-2.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-3.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-4.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="slick-item">
                            <div className="client-logo-wrapper">
                                <div className="client-logo">
                                    <img src="images/brand-logo/client-5.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* Brand Slider Area End */}
        </>
    );
};

export default BrandV1;