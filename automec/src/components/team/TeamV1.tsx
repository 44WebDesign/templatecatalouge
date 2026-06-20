import React, { useRef } from 'react';
import Slider from 'react-slick';
import SingleTeamV1 from './SingleTeamV1';
import TeamV1Data from '../../jsonData/team/TeamV1Data.json'

const TeamV1 = ( { partial = true } ) => {

    const sliderRef = useRef<Slider>(null);

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 4,
        dots: true,
        variableWidth: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    }
    return (
        <>
            {/* Team Member Slider Area Start */}
            <div className="team-slider-area style-1 te-py-120">
                {partial ?
                    <>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="te-section-title justify-content-center text-center">
                                        <div className="te-section-content">
                                            <div className="short-title-wrapper">
                                                <span className="short-title">our team member</span>
                                            </div>
                                            <h2 className="title">
                                                Building a Smarter Future <br /> through IT Amplifying
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="te-team-member-slider">
                            <Slider {...settings} ref={sliderRef}>
                                {TeamV1Data.map(team =>
                                    <div className="slick-slider-item" key={team.id}>
                                        <SingleTeamV1 team={team} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </>
                    :
                    <>
                        <div className="container">
                            <div className="row">
                                {TeamV1Data.map(team =>
                                    <div className="col-lg-4 col-md-6" key={team.id}>
                                        <SingleTeamV1 team={team} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                }
            </div>
            {/* Team Member Slider Area End */}
        </>
    );
};

export default TeamV1;