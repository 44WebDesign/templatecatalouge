import React from 'react';
import FooterBlogV1Data from '../../jsonData/footer/FooterBlogV1Data.json'
import SingleFooterBlogV1 from '../footer/SingleFooterBlogV1';

const FooterBlogWidget = () => {
    return (
        <>
            <div className="te-footer-widget">
                <h2 className="te-footer-widget-title">Recent Blog</h2>
                <div className="te_widget_latest_post">
                    <ul>
                        {FooterBlogV1Data.map(blog =>
                            <SingleFooterBlogV1 blog={blog} key={blog.id} />
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterBlogWidget;