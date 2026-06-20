import React from 'react';
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ProjectV1 from '../../components/project/ProjectV1';
import FooterV1 from '../../components/footer/FooterV1';

const Projects = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Projects" breadcrumb="projects" />
            <ProjectV1 partial={false} />
            <FooterV1 />
        </>
    );
};

export default Projects;