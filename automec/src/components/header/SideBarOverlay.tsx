import React from 'react';

type SideBarOverlayProps = {
    isMenuActive: boolean;
    handleOverlayClick: () => void;
};

const SideBarOverlay = ({ isMenuActive, handleOverlayClick }: SideBarOverlayProps) => {
    return (
        <>
            {isMenuActive && (
                <div className={`te-body-overlay ${isMenuActive ? 'active' : ''}`} onClick={handleOverlayClick}>
                </div>
            )}
        </>
    );
};

export default SideBarOverlay;