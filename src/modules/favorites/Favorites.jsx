import React from "react";
import PropTypes from "prop-types";
import Movie from "../movies/Movie";

const Favorites = ({ movies }) => (
  <div className="favorites-container">
    <div className="grid">
      {movies.map(movieData => (
        <Movie
          key={movieData.imdbID}
          data={movieData}
          isAdded
          onFavoriteClick={() => undefined}
        />
      ))}
    </div>
  </div>
);

Favorites.defaultProps = {
  movies: []
};

Favorites.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Favorites;
