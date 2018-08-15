import React from "react";
import PropTypes from "prop-types";
import "./Favorites.css";
import { emojify } from "react-emojione";
import { Link } from "react-router-dom";

const FavoritesCounter = ({ total }) => (
  <Link to="/favorites">
    <div className="favorites-box">
      <span>{emojify(":heart:")}</span>
      <span className="counter">{`${total}`}</span>
    </div>
  </Link>
);

FavoritesCounter.propTypes = {
  total: PropTypes.number.isRequired
};

export default FavoritesCounter;
