import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.CHANGE_CURRENT_USER:
      return action.user === 'X' ? 'O' : 'X';

    default:
      return state;
  }
}
