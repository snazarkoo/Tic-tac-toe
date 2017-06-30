import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';
import {
  markCell,
  resetGame,
  changeCurrentUser,
  addStep,
  makeUserWinner,
  markCombination
} from '../actions/gameActions';
import * as utils from '../utils/utils';

export class GridPanel extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidUpdate() {
    if (!this.props.user.isWinner && (this.props.step >= this.props.gridSize)) {
      const winnerResults = utils.checkWinner(this.props.matrix);

      if (winnerResults) {
        this.props.onMakeUserWinner(winnerResults.user);
        this.props.onMarkCombination(winnerResults.cells);
      }
    }
  }

  render() {
    return (
      <Grid
        onMarkCell={this.props.onMarkCell}
        matrix={this.props.matrix}
        user={this.props.user}
        onChangeUser={this.props.onChangeUser}
        onResetGame={this.props.onResetGame}
        onAddStep={this.props.onAddStep}
      />
    );
  }
}

GridPanel.propTypes = {
  onAddStep: PropTypes.func.isRequired,
  onMarkCell: PropTypes.func.isRequired,
  onMakeUserWinner: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
  onChangeUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  matrix: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  gridSize: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  const { matrix, user, step, gridSize } = state;

  return {
    matrix,
    user,
    step,
    gridSize
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMarkCell: (id, user) => dispatch(markCell(id, user)),
    onChangeUser: (user) => dispatch(changeCurrentUser(user)),
    onResetGame: (user) => dispatch(resetGame(user)),
    onAddStep: () => dispatch(addStep()),
    onMakeUserWinner: (user) => dispatch(makeUserWinner(user)),
    onMarkCombination: (cells) => dispatch(markCombination(cells))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridPanel);
