import React from 'react';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV1 from "../../components/header/HeaderV1";
import TeamDetailsContent from "../../components/team/TeamDetailsContent";
import { useParams } from "react-router-dom";
import TeamV1Data from "../../jsonData/team/TeamV1Data.json";

const TeamDetails = () => {
    const { id } = useParams();
    const teamId = id ? parseInt(id) : null;
    const data = teamId ? TeamV1Data.filter(team => team.id === teamId)[0] : null;

    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Team Details" breadcrumb="Team Details" />
            {data ? (
                <TeamDetailsContent teamInfo={data} />
            ) : (
                <p>Team not found</p>
            )}
            <FooterV1 />
        </>
    );
};

export default TeamDetails;
