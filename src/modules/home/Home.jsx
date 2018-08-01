import React, { Component } from 'react';
import Search from './Search';
import Grid from '../movies/Grid';
import { get } from '../../utils/Api';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [],
    }
  }


  handleSearchChange = (query) => {
    get({query})
      .then(({ Search: movies }) => this.setState({ movies }));
  }

  render() {
    return (
      <div className="container">
        <Search onSearch={this.handleSearchChange} />
        <Grid data= {this.state.movies}/>
      </div>
    );
  }
}

export default Home;
