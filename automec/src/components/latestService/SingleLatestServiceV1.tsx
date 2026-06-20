import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

type itemData = {
    id: number;
    thumb: string;
    icon: string;
    title: string;
    text: string;
}

const SingleLatestServiceV1 = ({ item, index } : { item: itemData; index: number }) => {
    const { id, thumb, icon, title, text } = item

    const delay = index * 0.2;

    return (
        <>
            <motion.div
                className="slick-slider-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                {/* single Service start */}
                <div className="te-info-card style-2">
                    <div className="te-info-card-inner">
                        <div className="image">
                            <img src={`images/service/${thumb}`} alt={title}/>
                        </div>
                        <div className="te-content-wrapper">
                            <div className="icon">
                                <img
                                    src={`images/icon/info-card/v-2/${icon}`}
                                    alt="image"
                                />
                            </div>
                            <div className="te-title-wrapper">
                                <h2 className="title">
                                    <Link to={`/service-details/${id}`}>{title}</Link>
                                </h2>
                            </div>
                            <div className="content">
                                <p className="desc">
                                    {text}
                                </p>
                                <div className="te-read-more">
                                    <Link to={`/service-details/${id}`} className="te-theme-btn">
                                        READ MORE
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* single Service end */}

            </motion.div>
        </>
    );
};

export default SingleLatestServiceV1;