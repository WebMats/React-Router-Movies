import React, { Component } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.movieId;
    this.fetchMovie(id);
  }
  componentDidUpdate() {
    const id = +this.props.match.params.movieId;
    if (this.state.movie.id !== id) {
      this.fetchMovie(id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    return (
      <div className="save-wrapper">
        <div className="movie-card">
        <MovieCard movie={this.state.movie}/> 
        </div>
        <div className="save-button" onClick={() => this.props.save(this.state.movie)}>Save</div>
      </div>
    );
  }
}
