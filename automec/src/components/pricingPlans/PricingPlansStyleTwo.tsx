import React from "react";
import {motion} from "framer-motion";
import PricingV2Data from "../../jsonData/pricingPlans/PricingV2Data.json";
import SinglePricingPlansStyleTwo from "../../components/pricingPlans/SinglePricingPlansStyleTwo";

type PricingPlansStyleTwoProps = {
    style?: string;
};

const PricingPlansStyleTwo = ({ style }: PricingPlansStyleTwoProps ) => {
    return (
        <>
            <div className={`price-area style-2 ${style}`}>
                <div className="circle-drop-shadow"></div>
                <div className="container">
                    <div className="row">
                        <motion.div
                            className="col-12"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="te-section-title justify-content-center text-center">
                                <div className="te-section-content">
                                    <div>
                                        <span className="short-title">Pricing action</span>
                                    </div>
                                    <h2 className="title">Stay ahead of the competition <br/> with
                                        Car <span>Repair</span></h2>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="row gy-4">
                        {PricingV2Data.map((item, index) =>
                            <SinglePricingPlansStyleTwo key={item.id} item={item} index={index} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPlansStyleTwo;