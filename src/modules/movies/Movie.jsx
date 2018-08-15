import React from 'react';
import PropTypes from 'prop-types';
import { emojify } from 'react-emojione';
import './Movie.css';

const Movie = ({ data, onFavoriteClick, isAdded }) => (
    <div className="movie-container">
        <img className="poster" src={data.Poster} alt={`${data.Title}-img`} />
        <div className="description">
            <span className="title">{`${data.Title} - ${data.Year}`}</span>
        </div>
        <button onClick={() => onFavoriteClick(data)}>
            { isAdded ? emojify(':heart:') : emojify(':black_heart:') }
        </button>
    </div>
);

Movie.propTypes = {
    data: PropTypes.shape({
        imdbID: PropTypes.string,
        Poster: PropTypes.string,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
    }).isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
    isAdded: PropTypes.bool.isRequired,
}

export default Movie;