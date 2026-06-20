import React from 'react';
import TeamV1Data from '../../jsonData/team/TeamV1Data.json'
import SingleTeamV2 from './SingleTeamV2';

const TeamV2 = () => {

    return (
        <>
            {/* Team Area Start */}
            <div className="team-area style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="te-section-title justify-content-center text-center">
                                <div className="te-section-content">
                                    <div className="short-title-wrapper">
                                        <span className="short-title">Our Team Member</span>
                                    </div>
                                    <h2 className="title">
                                        Where Quality Meets <br /> The Road
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {TeamV1Data.slice(0, 3).map(team =>
                            <SingleTeamV2 team={team} key={team.id} />
                        )}
                    </div>
                </div>
            </div>
            {/* Team Area End */}
        </>
    );
};

export default TeamV2;