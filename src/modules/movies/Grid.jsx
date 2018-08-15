import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const isMovieAdded = (movieID, favorites) => {
    return !!favorites.find((favorite) => favorite.imdbID === movieID);
};

const renderMovies = (data, onFavoriteClick, favorites) => (data.map((element) => (
    <Movie 
        onFavoriteClick={onFavoriteClick}
        key={element.imdbID}
        data={element}
        isAdded={isMovieAdded(element.imdbID, favorites)}/>)));

const Grid = ({ data, onFavoriteClick, favorites }) => (
    <div className="grid">
        {data.length > 0 ? renderMovies(data, onFavoriteClick, favorites) : "No movies here..."}
    </div>
);


Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grid;