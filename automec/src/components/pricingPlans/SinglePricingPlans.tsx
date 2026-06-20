import { Link } from "react-router-dom";
import {motion} from "framer-motion";

type PriceData = {
    currency: string;
    price: string;
    under_dot: string;
    price_desc: string;
};

type ListItem = {
    icon: string;
    text: string;
};

type PricingCardData = {
    title: string;
    price: PriceData;
    list: ListItem[];
};

const SinglePricingPlans = ({ item, index } : {item:PricingCardData; index: number} ) => {

    const { title, price, list } = item;
    const delay = index * 0.2;

    return (

        <>

            <motion.div
                className="col-md-6 col-lg-4 price-card-wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className={`price-card style-1 ${index === 0 ? 'active' : ''}`}>
                    <div className="price-header">
                        <div className="price-header-content">
                            <div className="card-title">
                                <h3 className="title">{title}</h3>
                            </div>
                            <div className="price">
                                <h3 className="price-heading">
                                    <span className="currency">{price.currency}</span> {price.price}
                                </h3>
                                <p className="price-desc">{price.price_desc}</p>
                            </div>
                        </div>
                        <div className="price-header-icon">
                            <img src="../../images/icon/price-card/icon-2.png" alt="icon" />
                        </div>
                    </div>
                    <div className="list-wrapper">
                        <div className="list">
                            <ul>
                                {list.map((item, idx) => (
                                    <li className="price-list-item" key={idx}>
                                        <i className={item.icon}></i>
                                        <span className="text">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Link to="/" className="price-btn">Get Started <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </motion.div>
            </>
    );
};

export default SinglePricingPlans;