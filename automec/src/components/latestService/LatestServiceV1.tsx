import Slider from 'react-slick';
import LatestServiceV1Data from '../../jsonData/latestService/LatestServiceV1Data.json'
import SingleLatestServiceV1 from './SingleLatestServiceV1';
import {motion} from "framer-motion";
import React, {useRef} from "react";

const LatestServiceV1 = ({ partial = true }) => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 3,
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
            {/* Feature Area Start*/}
            <div className="feature-area style-1 te-py-120 position-relative">
                <div className="sec-shape">
                    <img src="../../images/shape/wheel-shape.png" alt="image" />
                </div>
                <div className="container">
                    <div className="feature-area-wrapper">
                        {/* Section Title Start */}
                        {partial ?
                            <>
                            <div className="row gy-4">
                                <motion.div
                                    className="col-12"
                                    initial={{ y: -50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                                >
                                    <div className="te-section-title justify-content-center text-center">
                                        <div className="te-section-content">
                                            <div className="short-title-wrapper">
                                                <span className="short-title">Latest service</span>
                                            </div>
                                            <h2 className="title">Technology that design <br/> makes life easier</h2>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            </>
                            :
                            <>
                            </>
                        }
                        {/* Section Title End */}
                        <div className="row gy-4">
                            {partial ?
                                <>
                                    <div className="latest-service-slider">
                                        <Slider {...settings} ref={sliderRef}>
                                            {LatestServiceV1Data.slice(0, 6).map((item, index) =>
                                                <SingleLatestServiceV1 key={item.id} item={item} index={index} />
                                            )}
                                        </Slider>

                                    </div>
                                </>
                                :
                                <>
                                    {LatestServiceV1Data.map((item, index) =>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleLatestServiceV1 key={item.id} item={item} index={index} />
                                        </div>
                                    )}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature Area End !*/}
        </>
    );
};

export default LatestServiceV1;