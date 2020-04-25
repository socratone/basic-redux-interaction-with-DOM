const store = require('./store');

store.dispatch({
  type: 'add',
  description: 'hello'   
});

store.dispatch({
  type: 'add',
  description: 'why'   
});

console.log(store.getState());