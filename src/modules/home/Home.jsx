import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Grid from '../movies/Grid';
import { get } from '../../utils/Api';
import './Home.css';
import FavoritesCounter from '../favorites/FavoritesCounter';

class Home extends Component {

  static propTypes = {
    onFavoriteClick: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  state = {
    movies: [],
  }


  handleSearchChange = (query) => {
    get({query})
      .then(({ Search: movies }) => this.setState({ movies }));
  }

  render = () => {
    return (
      <div className="home-container">
        <div className="topbar">
          <Search onSearch={this.handleSearchChange} />
          <FavoritesCounter total={this.props.favorites.length} />
        </div>
        <Grid onFavoriteClick={this.props.onFavoriteClick} 
          data={this.state.movies} favorites={this.props.favorites}/>
      </div>
    );
  }
}

export default Home;
