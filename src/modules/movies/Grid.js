import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const Grid = ({ data }) => (
    <div className="grid">
        {data.map((element) => <Movie key={element.imdbID} data={element} />)}
    </div>
);

Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Grid;