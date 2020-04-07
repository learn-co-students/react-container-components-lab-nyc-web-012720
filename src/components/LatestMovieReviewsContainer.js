import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {

    state={
        reviews: []
    }

    componentDidMount() {
        fetch(URL).then(resp => resp.json()).then(revs => this.setState({ reviews: revs.results.slice(0,1) }) )
    }

    renderReviews(reviews) {
        return reviews.map( (review, index) => <MovieReviews key={index} review={review}/>)

    }

    render(){
        console.log(this.state.reviews)
        return(
            <div className="latest-movie-reviews">
                {this.state.reviews.length > 0 && this.renderReviews(this.state.reviews)}
            </div>
        )
    }
}