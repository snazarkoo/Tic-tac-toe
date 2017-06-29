import React, { PropTypes } from 'react';

const Cell = ({ cell, onCellClick }) => {
  return (
    <td onClick={onCellClick}>{cell.user}</td>
  );
};

Cell.propTypes = {
  onCellClick: PropTypes.func.isRequired,
  cell: PropTypes.object.isRequired
};

export default Cell;

