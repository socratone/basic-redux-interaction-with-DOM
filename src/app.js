const store = require('./store');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let fakedata = [
  { id: 1, text: 'socratone' },
  { id: 2, text: 'hello' },
  { id: 3, text: 'fine' },
];

app.get('/api', (req, res) => { // 초기값
  res.send(fakedata);
});

app.listen(3000, () => console.log('서버가 가동 중입니다.'));

// app.post('/api', (req, res) => { // 버튼 입력
//   const data = {
//     id: 
//   }
// });

// const unsubscribe = store.subscribe(() => { // store가 변경될 때마다 호출
//   console.log('store가 변경됐습니다.');
//   console.log(store.getState());
// });

// store.dispatch({
//   type: 'add',
//   description: 'first'   
// });

// store.dispatch({
//   type: 'add',
//   description: 'second'   
// });

// unsubscribe();

// store.dispatch({
//   type: 'add',
//   description: 'third'   
// });