import React from 'react'; 

const MovieReviews = (props) => {
   return (
      <div className="review-list">
         {/* {console.log(props.reviews)} */}
         {props.reviews.map((review, index) => 
            (
            <div className="review" key={index}>
               <h3>{review.headline}</h3>
               <h5>{review.display_title} - {review.mpaa_rating}</h5>
               <p>By {review.byline}</p>
               <p>{review.summary_short}</p>
               <br></br>
            </div>
            )
         )}
      </div>
   )
}

export default MovieReviews; 