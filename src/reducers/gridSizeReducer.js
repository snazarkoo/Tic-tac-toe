import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gridSizeReducer(state = initialState.gridSize, action) {
  switch (action.type) {
    case types.CHANGE_GRID_SIZE:
      return action.size;

    default:
      return state;
  }
}
