import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import { markCell, resetGame, changeCurrentUser } from '../actions/gameActions';
import * as utils from '../utils/utils';

const Grid = ({ onMarkCell, matrix, user, onChangeUser, onResetGame}) => {

  utils.checkWinner(matrix);

  let onCellClick = (cell) => {
    onMarkCell(cell, user);
    onChangeUser(user);
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
  matrix: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    matrix: state.matrix,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMarkCell: (id, user) => dispatch(markCell(id, user)),
    onChangeUser: (user) => dispatch(changeCurrentUser(user)),
    onResetGame: (user) => dispatch(resetGame(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
