const GRID_TYPE_LIST = [
  {
    id: 1,
    label: 'small',
    size: 3
  },
  {
    id: 2,
    label: 'middle',
    size: 4
  },
  {
    id: 3,
    label: 'large',
    size: 5
  }
];

export const USER_X = 'X';
export const USER_O = 'O';

function createDataCell(rowIndex, columnIndex) {
  return {
    id: `${rowIndex}${columnIndex}`,
    rowIndex,
    columnIndex,
    user: null
  };
}

function createDataState() {
  return {
    cells: [],
    count: 0,
    user: null,
    type: ''
  };
}

export function createGrid(size) {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(createDataCell(i, j));
    }
    matrix.push(row);
  }

  return matrix;
}

export function getGridTypeList() {
  return GRID_TYPE_LIST;
}

export function checkWinner(matrix) {
  const combinations = {
    'row': {},
    'column': {},
    'leftDiag': {
      state: createDataState()
    },
    'rightDiag': {
      state: createDataState()
    }
  };

  let counter = (combinations, type, i, j) => {
    const state = combinations[type].state;
    const cell = Object.assign({}, matrix[i][j], {type});

    if (cell.user) {
      if (!state.user) {
        state.user = cell.user;
        state.count++;
        state.cells.push(cell);
      } else {
        if (state.user.label === cell.user.label) {
          state.count++;
          state.cells.push(cell);

          if (state.count === matrix[0].length)  {
            return state;
          }
        }
      }
    }
  };

  for (let i=0; i < matrix[0].length; i++) {

    for (let prop in combinations) {
      if (prop === 'row' || prop === 'column') {
        combinations[prop].state = createDataState();
      }
    }

    for (let j=0; j < matrix[0].length; j++) {
      //ROWS
      let result = counter(combinations, 'row', i, j);

      if(result) { return result; }

      //COLUMNS
      result = counter(combinations, 'column', j, i);

      if(result) { return result; }

      //DIAGONAL1
      if (i === j) {
        result = counter(combinations, 'leftDiag', i, j);
        if(result) {  return result; }
      }
      //DIAGONAL2
      if (j === (matrix[i].length - i - 1)) {
        result = counter(combinations, 'rightDiag', i, j);
        if(result) { return result; }
      }
    }
  }
}
