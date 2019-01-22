import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div className="App">
        <SavedList list={this.state.savedList} />
        <div>Replace this Div with your Routes</div>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/:movieId" component={Movie} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
