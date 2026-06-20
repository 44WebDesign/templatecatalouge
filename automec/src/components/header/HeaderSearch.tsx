import React from 'react';

const HeaderSearch = ({
                          isSearchFormActive,
                          handleSearch,
                          handleSearchCloseClick
                      }: {
    isSearchFormActive: boolean;
    handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
    handleSearchCloseClick: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
    return (
        <>
            {isSearchFormActive && (
                <div className="te-search-form-wrapper te-active">
                    <div className="te-search-form-inner">
                        <div className="te-search-content-filed">
                            <form role="search" className="te-search-form" onSubmit={handleSearch} >
                                <div className="te-search-form-input">
                                    <div className="te-search-icon">
                                        <i className="fa-light fa-magnifying-glass"></i>
                                    </div>
                                    <input type="search" placeholder="Search" name='search' autoComplete='off' />
                                    <button className="te-theme-btn" type="submit" title="Search" aria-label="Search">Search</button>
                                </div>
                            </form>
                            <span className="te-search-close" onClick={handleSearchCloseClick}>
                                <i className="fa-light fa-xmark"></i>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeaderSearch;