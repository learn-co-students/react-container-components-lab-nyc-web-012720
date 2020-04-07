// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ review }) => {

    return(
        <div className="review-list">
            <div className="review">{review ? review.display_title : null}</div>
            
        </div>
    )
}

export default MovieReviews