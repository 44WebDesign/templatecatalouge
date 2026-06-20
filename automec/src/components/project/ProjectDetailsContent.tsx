import React from 'react';

type projectInfoData = {
    title: string;
}

const ProjectDetailsContent = ({ projectInfo } : { projectInfo:projectInfoData }) => {
    const { title } = projectInfo

    return (
        <>
            {/* Project Details Page Start !*/}
            <div className="project-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="project-details-image">
                                <img src="../../images/project/project-details.jpg" alt="Image" />
                            </div>
                        </div>
                        {/* Project Details Content Start */}
                        <div className="col-lg-8">
                            <div className="te-project-details-wrapper">
                                <div className="project-details">
                                    <div className="content">
                                        <div className="text">
                                            <h2 className="title">{title}</h2>
                                            <p>
                                                Distracted by the readable content of a page when looking at
                                                its layout io The point of using Lorem Ipsum is that it has
                                                a more- or-less normal distribution of letters.Distracted by
                                                the readable content of a page when looking at its layout io
                                                The point of using Lorem Ipsum is that it has a more-
                                                or-less normal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-details-overview">
                                    <div className="content">
                                        <h3>Engineered for Reliability</h3>
                                        <p>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal distribution of letters.It is a long established fact
                                            that a reader will be distracted by the readable conten
                                        </p>
                                    </div>
                                    <div className="te-list-item-wrapper">
                                        <div className="te-list-item style-1">
                                              <span className="icon">
                                                <i className="fa-regular fa-check" />
                                              </span>
                                            <span className="text">Precision Automotive Services</span>
                                        </div>
                                        <div className="te-list-item style-1">
                                              <span className="icon">
                                                <i className="fa-regular fa-check" />
                                              </span>
                                            <span className="text">
                                                Drive worry-free thanks to our repair mastery
                                              </span>
                                        </div>
                                        <div className="te-list-item style-1">
                                              <span className="icon">
                                                <i className="fa-regular fa-check" />
                                              </span>
                                            <span className="text">
                                                Restoring your car's power, one repair at a time
                                              </span>
                                        </div>
                                        <div className="te-list-item style-1">
                                          <span className="icon">
                                            <i className="fa-regular fa-check" />
                                          </span>
                                            <span className="text">
                                                Driving excellence, one repair at a time
                                              </span>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-info-wrapper">
                                <h3 className="title">Project Information</h3>
                                <div className="project-info">
                                    <div className="te-single-meta">
                                        <span className="meta-title">Project Name:</span>
                                        <span className="meta-text">Auto Repair</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Author:</span>
                                        <span className="meta-text">Dr.Hoque Sami</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Tags:</span>
                                        <span className="meta-text">Drive,Repair</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Value</span>
                                        <span className="meta-text">150000 USD</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Start Date:</span>
                                        <span className="meta-text">23 December, 2022</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">End Date</span>
                                        <span className="meta-text">25 January, 2023</span>
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
                            </div>
                        </div>
                        {/* Project Details Content End */}
                    </div>
                </div>
            </div>
            {/* Project Details Page End !*/}
        </>

    );
};

export default ProjectDetailsContent;