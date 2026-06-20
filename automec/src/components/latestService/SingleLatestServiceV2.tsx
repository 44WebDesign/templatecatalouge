"use client";
import React from 'react';
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

type itemData = {
    id: number;
    icon: string;
    thumb: string;
    title: string;
    text: string;
}
const SingleLatestServiceV2 = ({ item, index } : { item: itemData; index: number } ) => {
    const { id, icon, thumb, title, text } = item
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className="col-md-6 col-lg-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="te-info-card style-3">
                    <div className="te-info-card-inner">
                        <div className="image">
                            <img src={`/images/service/v-2/${thumb}`} alt={title} />
                        </div>
                        <div className="te-content-wrapper">
                            <div className="icon">
                                <img src={`/images/icon/info-card/v-3/${icon}`} alt="image" />
                            </div>
                            <div className="te-title-wrapper">
                                <h3 className="title"><Link to={`/service-details/${id}`}>{title}</Link></h3>
                            </div>
                            <div className="content">
                                <p className="desc">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleLatestServiceV2;