import React from 'react';
import CountUp from 'react-countup';
type countData = {
    icon: string;
    title: string;
    end: number;
}
const SingleCountV1 = ({ count } : { count:countData }) => {
    const { icon, title, end } = count

    return (
        <>
            <div className="te-counter-item">
                <div className="te-counter-title">
                    <div className="icon">
                        <img src={`../../images/icon/counter/v-2/${icon}`} alt="icon" />
                    </div>
                    <div className="content">
                        <h3 className="number">
                            <span className="counter">
                                  <CountUp end={end} enableScrollSpy />
                            </span>
                            <span>+</span>
                        </h3>
                        <p className="title">{title}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCountV1;