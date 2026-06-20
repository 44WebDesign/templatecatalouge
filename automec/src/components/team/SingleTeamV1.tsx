import React from 'react';
import SocialShare from '../slider/SocialShare';
import { Link } from "react-router-dom";

type teamData = {
    id: number;
    thumb: string;
    name: string;
    designation: string;
}

const SingleTeamV1 = ({ team } : { team: teamData } ) => {
    const { id, thumb, name, designation } = team

    return (
        <>
            <div className="te-team-card">
                <div className="image">
                    <img src={`../images/team-member/${thumb}`} alt={name} />
                </div>
                <div className="te-content-wrapper">
                    <div className="content">
                        <h3 className="title">
                            <Link to={`/team-details/${id}`}>{name}</Link>
                        </h3>
                        <p className="desc">{designation}</p>
                        <div className="social">
                            <SocialShare />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;