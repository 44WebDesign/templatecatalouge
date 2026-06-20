import React from 'react';
import CounterV2Data from '../../jsonData/counter/CounterV2Data.json'
import SingleCountV2 from './SingleCountV2';

const CountV2 = () => {
    return (
        <>
            <div className="counter-up-area style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="te-counter-card">
                                {CounterV2Data.map(count =>
                                    <SingleCountV2 count={count} key={count.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountV2;