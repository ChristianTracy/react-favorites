import React, { Component } from "react";
import Home from "./modules/home/Home";
import Favorites from "./modules/favorites/Favorites";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const movieAlreadyExist = (movieId, favorites) => !!favorites.find((movie) => movie.imdbID === movieId);

class App extends Component {
  state = {
    favorites: []
  };

  addFavoriteHandler = movie => {
    const { favorites } = this.state;
    if(movieAlreadyExist(movie.imdbID, favorites)){
      this.setState(prevState => ({
        favorites: prevState.favorites.filter(element => element.imdbID !== movie.movieID)
      }));
    }
    else {
      this.setState(prevState => ({
        favorites: [...prevState.favorites, movie]
      }));
    }
  };

  render = () => (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Home
                onFavoriteClick={this.addFavoriteHandler}
                favorites={this.state.favorites}
                {...props}
              />
            )}
          />
          <Route
            path="/favorites"
            render={props => <Favorites movies={this.state.favorites} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
