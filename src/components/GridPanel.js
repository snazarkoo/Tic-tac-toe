import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';
import {
  markCell,
  resetGame,
  changeCurrentUser,
  addStep,
  makeUserWinner
} from '../actions/gameActions';
import * as utils from '../utils/utils';

export class GridPanel extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidUpdate() {
    if (!this.props.user.isWinner) {
      const winnerResults = utils.checkWinner(this.props.matrix);

      if (winnerResults) {
        this.props.onMakeUserWinner(winnerResults.user);
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
  onMarkCell: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
  onChangeUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  matrix: PropTypes.array.isRequired
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
    onResetGame: (user) => dispatch(resetGame(user)),
    onAddStep: () => dispatch(addStep()),
    onMakeUserWinner: (user) => dispatch(makeUserWinner(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridPanel);
