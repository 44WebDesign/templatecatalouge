import React from 'react';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV1 from "../../components/header/HeaderV1";
import TeamV1 from "../../components/team/TeamV1";

const Team = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb pageTitle="Team" breadcrumb="Team" />
            <TeamV1 partial={false} />
            <FooterV1 />
        </>
    );
};

export default Team;