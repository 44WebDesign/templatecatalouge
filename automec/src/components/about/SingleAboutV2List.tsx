import React from 'react';

type ListData = {
    icon: string;
    listItem: string;
};

const SingleAboutV2List = ({ listData }: { listData: ListData }) => {
    const { icon, listItem } = listData;
    return (
        <>
            <div className="te-list-item">
                <span className="icon">
                    <i className={icon}></i>
                </span>
                <span className="text">{listItem}</span>
            </div>
        </>
    );
};

export default SingleAboutV2List;