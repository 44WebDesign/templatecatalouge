import React from 'react';
import RecentPostData from '../../jsonData/blog/RecentPostData.json'
import SingleRecentPost from './SingleRecentPost';

const RecentPostWidget = () => {
    return (
        <>
            <div className="widget te_widget_latest_post">
                <div className="te-widget-title">
                    <h4 className="wp-block-heading">Recent Posts</h4>
                </div>
                <ul>
                    {RecentPostData.map(post =>
                        <SingleRecentPost post={post} key={post.id} />
                    )}
                </ul>
            </div>
        </>
    );
};

export default RecentPostWidget;