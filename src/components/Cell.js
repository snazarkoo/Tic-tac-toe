import React, { PropTypes } from 'react';

const Cell = ({ cell, onCellClick }) => {
  return (
    <td disabled={!!cell.user} onClick={onCellClick}>{cell.user && cell.user.label}</td>
  );
};

Cell.propTypes = {
  onCellClick: PropTypes.func.isRequired,
  cell: PropTypes.object.isRequired
};

export default Cell;

