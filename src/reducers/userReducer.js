import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.CHANGE_CURRENT_USER:
      return {
        ...state,
        label: action.user && action.user.label === 'X' ? 'O' : 'X',
      };
    case types.MAKE_USER_WINNER:
      return Object.assign(
        {},
        action.user,
        { isWinner: true },
      );

    default:
      return state;
  }
}
