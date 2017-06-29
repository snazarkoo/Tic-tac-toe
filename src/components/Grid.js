import React, { PropTypes } from 'react';
import Cell from './Cell';

const Grid = ({ onMarkCell, matrix, user, onChangeUser, onResetGame, onAddStep }) => {

  let onCellClick = (cell) => {
    onMarkCell(cell, user);
    onChangeUser(user);
    onAddStep();
  };

  let createCell = (cell, cellIndex) => {
    return <Cell key={cellIndex}  cell={cell} onCellClick={() => onCellClick(cell)} />;
  };

  const createRow = (row, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {row.map(createCell)}
      </tr>
    );
  };

  return (
    <div>
      <table className="table">
        <tbody>
          {matrix.map(createRow)}
        </tbody>
      </table>
      <button onClick={onResetGame}>New Game</button>
    </div>
  );
};

Grid.propTypes = {
  onMarkCell: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
  onChangeUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  matrix: PropTypes.array.isRequired
};

export default Grid;
