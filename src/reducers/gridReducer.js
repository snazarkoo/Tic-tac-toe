import * as types from '../actions/actionTypes';
import * as utils from '../utils/utils';
import initialState from './initialState';

function cellReducer(state = {}, action) {
  switch (action.type) {
    case types.MARK_CELL:
      if (state.id !== action.cell.id) {
        return state;
      }
      return Object.assign(
        {},
        action.cell,
        { user: action.currentUser }
      );

    default:
      return state;
  }
}

export default function gridReducer(state = initialState.grid, action) {
  switch (action.type) {
    case types.MARK_CELL:
      return state.map((row) => {
        return row.map((cell) => cellReducer(cell, action));
      });

    case types.CHANGE_GRID_SIZE:
      return utils.createGrid(action.size);

    default:
      return state;
  }
}
