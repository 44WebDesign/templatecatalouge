import React, {useRef} from 'react'
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import ProjectV2Data from '../../jsonData/project/ProjectV2Data.json'
import SingleProjectV2Item from './SingleProjectV2Item'


const ProjectV2 = () => {
    const sliderRef = useRef<Slider>(null);
    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 2,
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
            {/* Portfolio Area Start !*/}
            <div
                className="portfolio-slider-area-bg background-gray-900"
                style={{ backgroundImage: 'url("images/section-bg/portfolio-two-bg.png")' }}
            >
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-4 align-self-center">
                            <div className="te-section-title mb-0">
                                <div className="te-section-content">
                                    <div className="short-title-wrapper">
                                        <span className="short-title only-divider">
                                          Latest Portfolio
                                        </span>
                                    </div>
                                    <h2 className="title text-white">Your Journey Start with Us</h2>
                                    <div className="te-section-desc">
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet consectetur adipiscingt platea
                                            pharetra, nostra mattis hendrerit proin mollis pretium
                                            facilisi in, ligula volutpat lobortis{" "}
                                        </p>
                                    </div>
                                    <div className="te-theme-btn-wrapper">
                                        <Link to="project-details" className="te-theme-btn text-white">
                                            EXPLORE MORE <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row gy-4">
                                <div className="portfolio-slider" id="portfolio_slider_two">
                                    <Slider {...settings} ref={sliderRef}>
                                        {ProjectV2Data.slice(0, 5).map((item, index) =>
                                            <div className="slick-slider-item" key={item.id}>
                                                <SingleProjectV2Item key={item.id} item={item} index={index} />
                                            </div>
                                        )}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio Area End */}
        </>
    );
};

export default ProjectV2;