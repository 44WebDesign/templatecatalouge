import { Link } from "react-router-dom";
import React, {useRef} from "react";
import Slider from 'react-slick';
const SliderV2 = () => {
    const sliderRef = useRef<Slider>(null);


    const settings = {
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 2500,
        slidesToShow: 1,
        dots: true,
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
            {/* Slider Section Start !*/}
            <div className="slider-area style-2">
                <div className="te-slider-wrapper">
                    <Slider {...settings} ref={sliderRef}>
                    {/* single slider start */}
                    <div className="te-single-slider-wrapper">
                        <div className="te-single-slider">
                            <div className="te-slider-overlay" />
                            <div className="te-slider-feature-image">
                                <img
                                    src="../../images/slider/slider-two-feature-image-one.jpg"
                                    alt="image"
                                />
                            </div>
                            <div className="te-slider-line-bar">
                                <div className="slider-line-bar one" />
                                <div className="slider-line-bar two" />
                            </div>
                            <div className="te-slider-shape">
                                <img src="../../images/slider/slider-two-shape.png" alt="image" />
                            </div>
                            <div className="container h-100">
                                <div className="te-slider-container">
                                    <div className="te-slider-column">
                                        <div className="te-slider-content-wrapper">
                                            <div className="te-slider-content">
                                                <span className="te-slider-short-title">CAR REPAIR</span>
                                                <h1 className="te-slider-title">
                                                    Revitalize Your <br /> Ride with Expert <br /> Care Work
                                                </h1>
                                                <p className="te-slider-short-desc">
                                                    Et purus duis sollicitudin dignissim habitant. Egestas
                                                    nulla quis venenatis cras sed Et purus duis sollicitudin
                                                    dignissim habitant. Egestas{" "}
                                                </p>
                                                <div className="te-slider-btn-wrapper">
                                                    <Link to="/about" className="te-theme-btn style-2">
                                                        LEARN MORE <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                    <Link
                                                        to="/services"
                                                        className="te-theme-btn text-white"
                                                    >
                                                        OUR SERVICES <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="te-slider-column"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single slider end */}
                    {/* single slider start */}
                    <div className="te-single-slider-wrapper">
                        <div className="te-single-slider">
                            <div className="te-slider-overlay" />
                            <div className="te-slider-feature-image">
                                <img
                                    src="../../images/slider/slider-two-feature-image-two.jpg"
                                    alt="image"
                                />
                            </div>
                            <div className="te-slider-line-bar">
                                <div className="slider-line-bar one" />
                                <div className="slider-line-bar two" />
                            </div>
                            <div className="te-slider-shape">
                                <img src="../../images/slider/slider-two-shape.png" alt="image" />
                            </div>
                            <div className="container h-100">
                                <div className="te-slider-container">
                                    <div className="te-slider-column">
                                        <div className="te-slider-content-wrapper">
                                            <div className="te-slider-content">
                                                <span className="te-slider-short-title">CAR REPAIR</span>
                                                <h1 className="te-slider-title">
                                                    Mastering the Art of Auto Repair
                                                </h1>
                                                <p className="te-slider-short-desc">
                                                    Et purus duis sollicitudin dignissim habitant. Egestas
                                                    nulla quis venenatis cras sed Et purus duis sollicitudin
                                                    dignissim habitant. Egestas{" "}
                                                </p>
                                                <div className="te-slider-btn-wrapper">
                                                    <Link to="/about" className="te-theme-btn style-2">
                                                        LEARN MORE <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                    <Link
                                                        to="/services"
                                                        className="te-theme-btn text-white"
                                                    >
                                                        OUR SERVICES <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="te-slider-column"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single slider end */}
                    </Slider>
                </div>
            </div>
            {/* Slider Section End !*/}
        </>
    );
};

export default SliderV2;