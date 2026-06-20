import Ratings from '../ratings/Ratings';

type testimonialData = {
    text: string;
    thumb: string;
    name: string;
    position: string;
}

const SingleTestimonialV1 = ({ testimonial } : { testimonial: testimonialData } ) => {
    const { text, thumb, name, position } = testimonial

    return (
        <>
            <div className="te-testimonial-card-two">
                <div className="te-content-wrapper">
                    <div className="te-user-meta">
                        <div className="te-user-info">
                            <Ratings />
                            <h2 className="name">{name}</h2>
                            <span className="designation">{position}</span>
                        </div>
                        <div className="image">
                            <img src={`/images/testimonial/v-2/${thumb}`} alt="user" />
                        </div>
                    </div>
                    <div className="content">
                        <p>{text}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleTestimonialV1;