import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    static propTypes = {
        onSearch: PropTypes.func.isRequired,
    }

    state = {
        query: null
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value,
        });
    }

    handleSearchClick = () => {
        const { query } = this.state; 
        const { onSearch } = this.props;
        onSearch(query);
    };

    render = () => (
        <div className="search-container">
            <input type="text" onChange={this.handleInputChange} placeholder="Movie name..."/>
            <button onClick={this.handleSearchClick}>SEARCH</button>
        </div>
    );
};

export default Search;