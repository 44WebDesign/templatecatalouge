import React from 'react';
import CountUp from 'react-countup';
type countData = {
    icon: string;
    title: string;
    end: number;
}
const SingleCountV2 = ({ count } : { count:countData }) => {
    const { icon, title, end } = count

    return (
        <>
            <div className="te-counter-item">
                <div className="te-counter-title">
                    <div className="icon">
                        <img src={`../../images/icon/counter/v-2/${icon}`} alt="icon" />
                    </div>
                    <div className="content">
                        <p className="title">{title}</p>
                        <h2 className="number">
                            <span className="counter"><CountUp end={end} enableScrollSpy duration={4} /></span><span>+</span>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCountV2;