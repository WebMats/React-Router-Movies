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
    this.setState(prevState => {
      const copiedSavedList = [...prevState.savedList];
      if (!copiedSavedList.includes(movie)) {
        copiedSavedList.push(movie);
        }
        return { savedList: copiedSavedList};
    })
  };

  render() {
    return (
      <div className="App">
        <SavedList list={this.state.savedList} />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/:movieId" render={(props) => <Movie {...props} save={this.addToSavedList} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
