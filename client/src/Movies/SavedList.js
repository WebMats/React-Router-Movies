import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class SavedList extends Component {

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, i) => (
          <Link key={i} replace to={`/movies/${movie.id}`}>
            <span className="saved-movie">{movie.title}</span>
          </Link>
        ))}
        <div className="home-button" onClick={() => {this.props.history.push("/")}}>Home</div>
      </div>
    );
  }
}

export default withRouter(SavedList);