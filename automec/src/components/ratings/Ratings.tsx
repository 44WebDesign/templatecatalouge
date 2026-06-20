import RatingsData from '../../jsonData/ratings/RatingsData.json'

const Ratings = () => {
    return (
        <>
            <div className="rating rating-icon">
                {RatingsData.map(rating =>
                    <i className={rating.rating} key={rating.id}></i>
                )}
            </div>
        </>
    );
};

export default Ratings;