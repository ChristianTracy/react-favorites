import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ data }) => (
    <div className="movie">
        <span className="title">{`${data.Title} - ${data.Year}`}</span>
        <img className="poster" src={data.Poster} alt={`${data.Title}-img`} />
    </div>
);

Movie.propTypes = {
    data: PropTypes.shape({
        Poster: PropTypes.string,
        Title: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        imdbID: PropTypes.string.isRequired
    })
}

export default Movie;