import React from 'react';

const MovieReviews = (props) => {

    return (
        <ul className="review-list">
            {props.reviews.map((review,idx) => <li className="review" key={idx}>{review.display_title}</li>)}
        </ul>
    )
}

export default MovieReviews;
