import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

type itemData = {
    id: number;
    thumb: string;
    title: string;
    category: string;
}
const SingleProjectV1Item = ({ item, index } : { item: itemData; index: number } ) => {
    const { id, thumb, title, category} = item
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className="te-portfolio-card style-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="image">
                    <img src={`images/project/${thumb}`} alt={title} />
                    <div className="te-content-wrapper">
                        <div className="content">
                            <div className="content-inner">
                                <h3 className="title">
                                    <Link to={`/project-details/${id}`}>{title}</Link>
                                </h3>
                                <span className="sub-title">{category}</span>
                            </div>
                            <div className="btn-wrapper">
                                <Link to={`/project-details/${id}`}>
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleProjectV1Item;