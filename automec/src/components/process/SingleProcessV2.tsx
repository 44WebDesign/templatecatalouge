import React from 'react';
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

type processData = {
    id: number;
    title: string;
    text: string;
}

const SingleProcessV2 = ({ process, index } : { process: processData; index: number } ) => {
    const { id, title, text } = process
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className="col-12 col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="te-process-step style-2">
                    <div className="icon">
                        <span className="counter-number">0{id}</span>
                    </div>
                    <div className="te-content-wrapper">
                        <div className="te-title-wrapper">
                            <h3 className="title">{title}</h3>
                        </div>
                        <div className="content">
                            <p className="desc">{text}</p>
                            <div className="te-read-more">
                                <Link to="#" className="te-read-more-btn">
                                    READ MORE <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleProcessV2;