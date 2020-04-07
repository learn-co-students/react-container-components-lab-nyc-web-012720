import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    renderSearchReviews(reviews) {
        return reviews.map( (review, index) => <MovieReviews key={index} review={review}/>)

    }

    handleSubmit = event =>{
        event.preventDefault()
        console.log(event)
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(revs => this.setState({ reviews: revs.results.slice(0,1) }) )
    }

    handleChange = (e) => {
        const query = e.target.value
        this.setState({
            searchTerm: query
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                {this.state.reviews.length > 0 && this.renderSearchReviews(this.state.reviews)}
            <form onSubmit={this.handleSubmit}>
                <label>Movie Search:
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />        
                </label>
                <input type="submit" value="Submit" />
          </form>
            </div>
        )
    }
}