import React, { Component } from 'react';
import Home from './modules/home/Home';
import './App.css';

class App extends Component {

  state = {
    favorites: [],
  }

  addFavoriteHandler = (movieID) => {
    if(this.state.favorites.includes(movieID)){
      this.setState((prevState) => ({
        favorites: prevState.favorites.filter(element => element !== movieID)
      }));
    }
    else{
      this.setState((prevState) => ({
        favorites: [...prevState.favorites, movieID]
      }));
    }
  }

  render = () => (
    <div>
      <Home onFavoriteClick={this.addFavoriteHandler} favorites={this.state.favorites} />
    </div>
  );
};

export default App;
