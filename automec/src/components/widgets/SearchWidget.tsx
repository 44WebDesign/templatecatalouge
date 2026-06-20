import React from 'react';

const SearchWidget = () => {

    return (
        <>
            <div className="widget te_widget_search">
                <div className="te-widget-title">
                    <h4 className="wp-block-heading">Search</h4>
                </div>
                <form className="search-form">
                    <input type="text" placeholder="Type and Search" autoComplete='off' required name='search' />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </>
    );
};

export default SearchWidget;