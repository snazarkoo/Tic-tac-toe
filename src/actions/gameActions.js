import * as types from './actionTypes';

export function changeGridSize(size) {
  return { type: types.CHANGE_GRID_SIZE, size };
}

export function markCell(cell, currentUser) {
  return { type: types.MARK_CELL, cell, currentUser };
}

export function changeCurrentUser(user) {
  return { type: types.CHANGE_CURRENT_USER, user };
}

export function makeUserWinner(user) {
  return { type: types.MAKE_USER_WINNER, user };
}

export function resetGame() {
  return { type: types.RESET_GAME };
}

export function addStep() {
  return { type: types.ADD_STEP };
}

export function markCombination(cellList) {
  return { type: types.MARK_COMBINATION,  cellList};
}



