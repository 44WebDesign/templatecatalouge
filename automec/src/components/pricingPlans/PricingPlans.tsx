import {motion} from "framer-motion";
import PricingV1Data from "../../jsonData/pricingPlans/PricingV1Data.json";
import SinglePricingPlans from "../../components/pricingPlans/SinglePricingPlans";

const PricingPlans = () => {
    return (
        <>
            {/* Price Area Start !*/}
            <div className="price-area style-1 py-120 position-relative">
                <div className="sec-shape">
                    <img src="../../images/shape/wheel-shape.png" alt="image" />
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <motion.div
                            className="col-md-12 col-lg-4 align-self-center"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="te-section-title mb-0">
                                <div className="te-section-content">
                                    <div className="short-title-wrapper">
                                        <span className="short-title only-divider">Our package</span>
                                    </div>
                                    <h2 className="title">Precision in Every Engine Piston</h2>
                                    <div className="te-section-desc">
                                        <p>
                                            Et purus duis sollicitudin dignissim habitant. <br /> Egestas
                                            nulla quis venenatis cras sed{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {PricingV1Data.slice(0, 2).map((item, index) =>
                            <SinglePricingPlans key={item.id} item={item} index={index} />
                        )}
                    </div>
                </div>
            </div>
            {/* Price Area End */}
        </>
    );
};

export default PricingPlans;