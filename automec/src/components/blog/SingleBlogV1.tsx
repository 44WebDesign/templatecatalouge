import { Link } from "react-router-dom";
import {motion} from "framer-motion";

type itemData = {
    id: number;
    date: string;
    month: string;
    thumb: string;
    author: string;
    comments: string;
    title: string;
    text: string;
}


const SingleBlogV1 = ({ item, index } : { item: itemData; index: number }) => {
    const { id, date, month, thumb, author, comments, title, text } = item
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className="te-post-card style-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="content-wrapper">
                    <div className="content">
                        <div className="te-post-meta-info">
                            <div className="te-single-meta">
                                    <span className="icon">
                                      <i className="fa-solid fa-user" />
                                    </span>
                                <span className="text">By {author}</span>
                            </div>
                            <div className="te-single-meta">
                                    <span className="icon">
                                      <i className="fa-solid fa-comments" />
                                    </span>
                                <span className="text">Comments ({comments})</span>
                            </div>
                        </div>
                        <h3 className="title">
                            <Link to={`/blog-details/${id}`}>{title}</Link>
                        </h3>
                        <div className="te-post-content">
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="btn-wrapper">

                        <Link to={`/blog-details/${id}`} className="te-theme-btn">
                            READ MORE <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <img src={`/images/latest-post/${thumb}`} alt={title} />
                    <div className="te-post-date">
                        <span>{date}</span>
                        <span>{month}</span>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleBlogV1;