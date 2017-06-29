import * as utils from '../utils/utils';

export default {
  gridSize: 3,
  grid: utils.createGrid(3),
  user: {
    label: 'X',
    isWinner: false
  },
  step: 0
};
