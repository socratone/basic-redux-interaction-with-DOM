let lastId = 1;

function reducer(state = [], action) {
  if(action.type === 'add') {
    return [
      ...state,
      {
        id: lastId++,
        text: action.text
      }
    ];
  } else {
    return state;
  }
}

module.exports = reducer;