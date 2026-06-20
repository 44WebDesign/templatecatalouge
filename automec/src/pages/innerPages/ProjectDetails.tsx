import React from 'react';
import HeaderV1 from "../../components/header/HeaderV1";
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ProjectDetailsContent from '../../components/project/ProjectDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import ProjectV1Data from '../../jsonData/project/ProjectV1Data.json';

const ProjectDetails = () => {
    const { id } = useParams();
    const projectId = id ? parseInt(id) : null;
    const data = projectId ? ProjectV1Data.filter(project => project.id === projectId)[0] : null;

    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Project Details" breadcrumb="project-details" />
            {data ? (
                <ProjectDetailsContent projectInfo={data} />
            ) : (
                <p>Project not found</p>
            )}
            <FooterV1 />
        </>
    );
};

export default ProjectDetails;
