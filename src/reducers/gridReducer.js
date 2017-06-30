import * as types from '../actions/actionTypes';
import * as utils from '../utils/utils';
import initialState from './initialState';

function getCell(list, id) {
  return list.find(cell => cell.id === id);
}

function cellReducer(state = {}, action) {
  switch (action.type) {
    case types.MARK_CELL:
      if (state.id !== action.cell.id) {
        return state;
      }
      return {
        ...action.cell,
        user: action.currentUser,
      };

    case types.MARK_COMBINATION:
      if (getCell(action.cellList, state.id)) {
        return {
          ...getCell(action.cellList, state.id),
        };
      }
      return state;

    default:
      return state;
  }
}

export default function gridReducer(state = initialState.grid, action) {
  switch (action.type) {
    case types.MARK_CELL:
      return state.map(row => row.map(cell => cellReducer(cell, action)));

    case types.CHANGE_GRID_SIZE:
      return utils.createGrid(action.size);

    case types.MARK_COMBINATION:
      return state.map(row => row.map(cell => cellReducer(cell, action)));

    default:
      return state;
  }
}
