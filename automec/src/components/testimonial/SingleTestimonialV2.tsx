import React from 'react';

type testimonialData = {
    name: string;
    designation: string;
    thumb: string;
    text: string;
}

const SingleTestimonialV2 = ({ testimonial } : { testimonial: testimonialData }) => {
    const { name, designation, thumb, text } = testimonial

    return (
        <>
            <div className="te-testimonial-card-two style-2">
                <div className="te-content-wrapper">
                    <div className="te-user-meta">
                        <div className="image">
                            <img src={`/images/testimonial/v-2/${thumb}`} alt={name} />
                        </div>
                        <div className="te-user-info">
                            <h3 className="name">{name}</h3>
                            <span className="designation">{designation}</span>
                        </div>
                    </div>
                    <div className="content">
                        <p>{text}</p>
                    </div>
                    <div className="rating-wrapper">
                        <div className="rating-icon">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="icon">
                            <i className="fa-solid fa-quote-right" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;