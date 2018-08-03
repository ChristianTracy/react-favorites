import React from "react";
import PropTypes from "prop-types";
import "./Favorites.css";
import { emojify } from "react-emojione";

const FavoritesCounter = ({ total }) => (
  <div className="favorites-box">
    <span>{emojify(":heart:")}</span>
    <span className="counter">{`${total}`}</span>
  </div>
);

FavoritesCounter.propTypes = {
  total: PropTypes.number.isRequired
};

export default FavoritesCounter;
