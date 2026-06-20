import { Link } from "react-router-dom";
import {motion} from "framer-motion";

type processData = {
    icon: string;
    title: string;
    text: string;
}

const SingleProcessV1 = ({ process, index } : { process: processData; index: number } ) => {
    const { icon, title, text } = process

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
                {/* Single Service Start !*/}
                <div className="te-process-step">
                    <div className="icon">
                        <img src={`/images/icon/process/${icon}`} alt="Icon" />
                    </div>
                    <div className="te-content-wrapper">
                        <div className="te-title-wrapper">
                            <h3 className="title">{title}</h3>
                        </div>
                        <div className="content">
                            <p className="desc">{text}</p>
                            <div className="te-read-more">
                                <Link to={`#`} className="te-read-more-btn">
                                    READ MORE <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Service End !*/}
            </motion.div>
        </>
    );
};

export default SingleProcessV1;