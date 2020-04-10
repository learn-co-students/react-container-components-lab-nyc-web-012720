import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'T5b6rbjYEJGgxX0Pt4YaIeIPOOXPb0Kl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleFormChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(event.target)
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(json => this.setState({reviews: json.results}))
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Search Term" onChange={this.handleFormChange} value={this.state.searchTerm}/>
                        <button>Search</button>
                    </form>
                </div>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}