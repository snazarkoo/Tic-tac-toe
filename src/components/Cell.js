import React, { PropTypes } from 'react';
import * as utils from '../utils/utils';

const Cell = ({ cell, onCellClick }) => {
  const label = cell.user && cell.user.label;
  const cellClasses = `${cell.type} ${utils.USER_X === label ? 'user-x' : ''}`;

  return (
    <td disabled={cell.user} onClick={onCellClick} className={cellClasses}>
      {cell.user && cell.user.label}
    </td>
  );
};

Cell.propTypes = {
  onCellClick: PropTypes.func.isRequired,
  cell: PropTypes.object.isRequired,
};

export default Cell;

