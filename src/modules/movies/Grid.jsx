import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const isMovieAdded = (movieID, favorites) => {
    return favorites.includes(movieID);
};

const Grid = ({ data, onFavoriteClick, favorites }) => (
    <div className="grid">
        {data.map((element) => (
            <Movie 
                onFavoriteClick={onFavoriteClick}
                key={element.imdbID}
                data={element}
                isAdded={isMovieAdded(element.imdbID, favorites)}/>)
        )}
    </div>
);


Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Grid;