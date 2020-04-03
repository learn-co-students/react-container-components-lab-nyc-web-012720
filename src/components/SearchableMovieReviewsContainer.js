import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    state={
        reviews:[],
        searchTerm: ""
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(res => res.json())
            .then(reviews => this.setState({reviews: reviews.results}))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="search" value={this.state.searchTerm}/>
                <button type="submit" id="submit">Submit</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;