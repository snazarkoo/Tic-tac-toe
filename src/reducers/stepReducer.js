import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function stepReducer(state = initialState.step, action) {
  switch (action.type) {
    case types.ADD_STEP:
      return ++state;

    default:
      return state;
  }
}
