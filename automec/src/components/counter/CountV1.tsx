import React from 'react';
import CounterV1Data from '../../jsonData/counter/CounterV1Data.json'
import SingleCountV1 from './SingleCountV1';

const CountV1 = () => {
    return (
        <>
            {/* counter section start */}
            <div className="counter-up-area style-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="te-counter-card"
                                style={{
                                    backgroundImage: 'url("images/section-bg/counter-bg-shape.png")'
                                }}
                            >
                                {CounterV1Data.map(count =>
                                    <SingleCountV1 count={count} key={count.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* counter section end */}
        </>
    );
};

export default CountV1;