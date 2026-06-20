import React from 'react';
import GalleryData from '../../jsonData/widgets/GalleryData.json'

const GalleryWidget = () => {
    return (
        <>
            <div className="widget te_widget_instagram_feed">
                <div className="te-widget-title">
                    <h4 className="wp-block-heading">Gallery</h4>
                </div>
                <div className="widget-instagram-feed">
                    {GalleryData.map(gallery =>
                        <div className="single-instagram-feed" key={gallery.id}>
                            <img
                                src={`/images/instagram/${gallery.thumb}`}
                                alt="image"
                                width={100}
                                height={100}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default GalleryWidget;