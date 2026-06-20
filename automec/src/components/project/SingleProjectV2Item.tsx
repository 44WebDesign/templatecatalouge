import React from 'react';
import { Link } from "react-router-dom";
type itemData = {
    id: number;
    thumb: string;
    title: string;
}
const SingleProjectV1Item = ( { item } : { item: itemData; index: number } ) => {
    const { id, thumb, title } = item
    return (
        <>
            <div className="te-portfolio-card style-2">
                <div className="image">
                    <img src={`./images/project/${thumb}`} alt={title} />
                    <div className="te-content-wrapper">
                        <div className="content">
                            <div className="btn-wrapper">
                                <Link to={`project-details/${id}`}>
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1Item;