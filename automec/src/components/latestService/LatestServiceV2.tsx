import React from 'react';
import LatestServiceV2Data from '../../jsonData/latestService/LatestServiceV2Data.json'
import SingleLatestServiceV2 from './SingleLatestServiceV2';
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
const LatestServiceV2 = ({partial = true}) => {
    return (
        <>
            {/* Latest Service Area Start !*/}
            <div className="latest-service-area style-2 te-py-120">
                <div className="container">
                    <div className="row gy-5">

                        <motion.div
                            className="col-lg-4"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="te-section-title mb-0">
                                <div className="te-section-content">
                                    <div className="short-title-wrapper">
                                            <span className="short-title only-divider">
                                              Latest Services
                                            </span>
                                    </div>
                                    <h2 className="title">Drive confidence a with precision</h2>
                                    <div className="te-section-desc">
                                        <p>
                                            Car repair is a crucial service that helps maintain and a
                                            restore the functionality of vehicles. From fixing engine
                                            issues to repairing body damage
                                        </p>
                                    </div>
                                    <div className="te-theme-btn-wrapper">
                                        <Link to="/services" className="te-theme-btn">
                                            EXPLORE MORE <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="col-lg-8">
                            <div className="row gy-4">
                                {partial ?
                                    <>
                                        {LatestServiceV2Data.slice(0, 4).map((item, index) =>
                                            <SingleLatestServiceV2 key={`partial-${item.id}-${index}`} item={item} index={index} />
                                        )}
                                    </>
                                    :
                                    <>
                                        {LatestServiceV2Data.map((item, index) =>
                                            <SingleLatestServiceV2 key={`full-${item.id}-${index}`} item={item} index={index} />
                                        )}
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest Service Area End */}
        </>
    );
};

export default LatestServiceV2;