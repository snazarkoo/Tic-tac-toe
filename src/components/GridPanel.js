import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetGame, updateData } from '../actions/gameActions';
import Cell from './Cell';

const GridPanel = ({ matrix, user, onResetGame, onUpdateData }) => {

  let onCellClick = (cell) => {
    onUpdateData(cell, user);
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
    <div className="game-table">
      <table disabled={user.isWinner}>
        <tbody>
        {matrix.map(createRow)}
        </tbody>
      </table>
      <button onClick={onResetGame}>New Game</button>
    </div>
  );
};

GridPanel.propTypes = {
  onUpdateData: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  matrix: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { matrix, user } = state;

  return {
    matrix,
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onResetGame: () => dispatch(resetGame()),
    onUpdateData: (cell, user) => dispatch(updateData(cell, user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridPanel);
