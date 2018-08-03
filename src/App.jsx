import React, { Component } from 'react';
import Home from './modules/home/Home';
import './App.css';

class App extends Component {

  state = {
    favorites: [],
  }

  addFavoriteHandler = (favoriteID) => {
    if(this.state.favorites.includes(favoriteID)){
      this.setState((prevState) => ({
        favorites: prevState.favorites.filter(element => element !== favoriteID)
      }));
    }
    else{
      this.setState((prevState) => ({
        favorites: [...prevState.favorites, favoriteID]
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
