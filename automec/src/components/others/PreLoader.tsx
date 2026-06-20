import React from 'react';

const PreLoader = () => {
    return (
        <>
            {/* Preloader Start !*/}
            <div id="preloader">
                <div id="preloader-status">
                    <div className="preloader-image">
                        <img src="../../images/icon/preloader.gif" alt="preeloader" />
                    </div>
                </div>
            </div>
            {/* Preloader End !*/}
        </>

    );
};

export default PreLoader;