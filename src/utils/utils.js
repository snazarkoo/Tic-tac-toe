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

function createDataCell(rowIndex, columnIndex) {
  return {
    id: `${rowIndex}${columnIndex}`,
    rowIndex,
    columnIndex,
    user: null
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
    'rows': {},
    'columns': {},
    'diagonal1': {
      state: {
        count: 0,
        user: null
      }
    },
    'diagonal2': {
      state: {
        count: 0,
        user: null
      }
    }
  };

  let counter = (combinations, type, i, j) => {
    if (matrix[i][j].user) {
      if (!combinations[type].state.user) {
        combinations[type].state.user = matrix[i][j].user;
        combinations[type].state.count++;
      } else {
        if (combinations[type].state.user === matrix[i][j].user) {
          combinations[type].state.count++;
          if (combinations[type].state.count === matrix[0].length)  {
            return combinations[type].state;
          }
        }
      }
    }
  };

  const showWiiner = (result) => {
    console.log(result);
    alert(`Winner ${result.user}`);
  };

  for (let i=0; i < matrix[0].length; i++) {

    let state = {
      count: 0,
      user: null
    };

    for (let prop in combinations) {
      if (prop === 'rows' || prop === 'columns') {
        combinations[prop].state = Object.assign({}, state);
      }
    }

    for (let j=0; j < matrix[0].length; j++) {
      //ROWS
      let result = counter(combinations, 'rows', i, j);

      if(result) { console.log('rows'); return showWiiner(result); }

      //COLUMNS
      result = counter(combinations, 'columns', j, i);

      if(result) { console.log('COLUMNS'); return showWiiner(result); }

      //DIAGONAL1
      if (i === j) {
        result = counter(combinations, 'diagonal1', i, j);
        if(result) { console.log('diag1'); return showWiiner(result); }
      }
      //DIAGONAL2
      if (j === (matrix[i].length - i - 1)) {
        result = counter(combinations, 'diagonal2', i, j);
        if(result) { console.log('diag2'); return showWiiner(result); }
      }
    }
  }
  console.log(matrix);
}
