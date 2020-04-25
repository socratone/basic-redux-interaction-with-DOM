let lastId = 0;

function reducer(state = [], action) {
  if(action.type === 'add') {
    return [
      ...state,
      {
        id: lastId++,
        description: action.description
      }
    ];
  } else {
    return state;
  }
}

module.exports = reducer;