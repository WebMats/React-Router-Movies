import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div className="home-button" onClick={() => {this.props.history.push("/")}}>Home</div>
      </div>
    );
  }
}

export default withRouter(SavedList);