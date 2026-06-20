import React from 'react';
import SocialShare from '../slider/SocialShare';
import SkillProgressData from '../../jsonData/others/SkillProgressData.json'
import SingleSkillProgress from '../others/SingleSkillProgress';

type teamInfoData = {
    id: number;
    thumb: string;
    name: string;
    designation: string;
}

const TeamDetailsContent = ({ teamInfo } : {teamInfo: teamInfoData}) => {
    const { thumb, name, designation } = teamInfo

    return (
        <>
            {/* Team Details Page Start !*/}
            <div className="team-details-page">
                <div className="container">
                    <div className="row gy-5">
                        {/* Team Details Content Start */}
                        <div className="col-lg-7 order-2 order-lg-1">
                            <div className="team-details-wrapper">
                                <div className="team-details">
                                    <div className="content">
                                        <div className="user-meta">
                                            <h3 className="title">{name}</h3>
                                            <p className="desc">{designation}</p>
                                        </div>
                                        <p className="te-short-desc">
                                            Aliquam eros justo, posuere loborti viverra laoreet matti
                                            ullamcorper posuere viverra .Aliquam eros justo, posuere
                                            lobortis, viverra laoreet augue mattis fermentum ullamcorper
                                            viverra laoreet Aliquam eros justo, posuere loborti viverra
                                            laoreet matti ullamcorper posuere viverra Aliquam
                                        </p>
                                        <div className="team-member-info">
                                            <div className="te-single-meta">
                                                <span className="meta-title">Phone :</span>
                                                <span className="meta-text">(405) 555-0128</span>
                                            </div>
                                            <div className="te-single-meta">
                                                <span className="meta-title">Email :</span>
                                                <span className="meta-text">yourmail@gmail.com</span>
                                            </div>
                                            <div className="te-single-meta">
                                                <span className="meta-title">Experience :</span>
                                                <span className="meta-text">10+ Years</span>
                                            </div>
                                            <div className="te-single-meta">
                                                <span className="meta-title">Address :</span>
                                                <span className="meta-text">
                                                      Manchester, Kentucky 39495
                                                    </span>
                                            </div>
                                            <div className="te-single-meta">
                                                    <span className="meta-title">
                                                      Rating :
                                                      <span className="client-reviews">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                      </span>
                                                    </span>
                                            </div>
                                        </div>
                                        <div className="social">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                                <div className="team-details-overview-wrapper">
                                    <div className="team-details-overview">
                                        <div className="content">
                                            <h3 className="sec-title">Technical Experience</h3>
                                            <p>
                                                Eros justo, posuere loborti viverra laoreet matti
                                                ullamcorper posuere viverra .Aliquam eros just posuere
                                                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                                                viverra laoreet Aliquam eros justo, posuere loborti viverra
                                                laoreet matti ullamcorper posuere viverra
                                            </p>
                                            <p>
                                                Eros justo, posuere loborti viverra laoreet matti
                                                ullamcorper posuere viverra .Aliquam eros justo, posue
                                                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                                                viverra laoreet Aliquam eros justo, posuere loborti viverra
                                                laoreet{" "}
                                            </p>
                                        </div>
                                        <div className="skill-progressbar-content">
                                            <h3 className="sec-title">Skills</h3>
                                            <div className="skill-progressbar-wrapper">
                                                {SkillProgressData.map(progress =>
                                                    <SingleSkillProgress progress={progress} key={progress.id} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-xxl-1 order-1 order-lg-2">
                            <div className="team-member-info-wrapper">
                                <div className="user-image">
                                    <img src={`../../images/team-member/${thumb}`} alt={name} />
                                </div>
                                <div className="team-working-wrapper">
                                    <h4 className="working-title">Working Hour</h4>
                                    <div className="team-working">
                                        <div className="single-working-slot">
                                            <span className="title">Monday</span>
                                            <span className="divider" />
                                            <span className="title">2:00 AM-7.00 PM</span>
                                        </div>
                                        <div className="single-working-slot">
                                            <span className="title">Tuesday</span>
                                            <span className="divider" />
                                            <span className="title">3:00AM -7.00 PM</span>
                                        </div>
                                        <div className="single-working-slot">
                                            <span className="title">Friday</span>
                                            <span className="divider" />
                                            <span className="title">1:00 AM-7.00 PM</span>
                                        </div>
                                        <div className="single-working-slot">
                                            <span className="title">Saturday</span>
                                            <span className="divider" />
                                            <span className="title">3:00 PM-6.00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Team Details Content End */}
                    </div>
                </div>
            </div>
            {/* Team Details Page End !*/}
        </>
    );
};

export default TeamDetailsContent;