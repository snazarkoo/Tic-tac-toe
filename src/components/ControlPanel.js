import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeGridSize, resetGame } from '../actions/gameActions';
import * as utils from '../utils/utils';

const ControlPanel = ({ onChangeGridSize, currentUser, onResetGame, size, gameStatus }) => {
  let onTodoClick = (event) => {
    onResetGame();
    onChangeGridSize(parseInt(event.target.value));
  };

  return (
    <div className="control-panel">
      <h3>Tic-tac-toe</h3>
      <select onChange={onTodoClick} value={size}>
        {utils.getGridTypeList().map(type =>
          <option value={type.size}
                  key={type.id}>
            {type.label}
          </option>
        )}
      </select>
      <div className="users-switch">
        <div>
          <span className={currentUser.label === 'X' ? 'selected' : ''}>Player X</span>
        </div>
        <div>
          <span className={currentUser.label === 'O' ? 'selected': ''}>Player O</span>
        </div>
      </div>
      <div className="game-status">
        {gameStatus}
      </div>
    </div>
  );
};

ControlPanel.propTypes = {
  onChangeGridSize: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  gameStatus: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    currentUser: state.user,
    size: state.gridSize,
    gameStatus: getGameStatus(state.step, state.gridSize, state.user)
  };
}

function getGameStatus(step, size, user) {
  const cellNumbers = Math.pow(size, 2);
  if (user.isWinner) {
    return `${user.label} won`;
  }
  if (step === cellNumbers) {
    return 'Draw';
  }
  if (step) {
    return `${user.label} turn`;
  }
  return 'Start the game';
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeGridSize: (size) => dispatch(changeGridSize(size)),
    onResetGame: () => dispatch(resetGame())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
