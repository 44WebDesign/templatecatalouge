import React from 'react';
import SocialShare from '../slider/SocialShare';

const SocialWidget = () => {
    return (
        <>
            <div className="widget te_widget_social_profile">
                <div className="te-widget-title">
                    <h4 className="wp-block-heading">Social</h4>
                </div>
                <div className="te-social-profile">
                    <SocialShare />
                </div>
            </div>
        </>
    );
};

export default SocialWidget;