import { combineReducers } from 'redux';
import gridSize from './gridSizeReducer';
import matrix from './gridReducer';
import user from './userReducer';
import * as types from '../actions/actionTypes';

const appReducer = combineReducers({
  gridSize,
  matrix,
  user
});

const rootReducer = (state, action) => {
  if (action.type === types.RESET_GAME) {
    state = action.reset;
  }

  return appReducer(state, action);
};

export default rootReducer;
