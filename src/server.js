// redux
const store = require('./store');
const unsubscribe = store.subscribe(() => { // store가 변경될 때마다 호출
  console.log('store가 변경됐습니다.');
  console.log(store.getState());
});

// 서버
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.get('/api', (req, res) => { // 초기값
  res.send(store.getState());
});

app.post('/api', (req, res) => { // 버튼 입력
  store.dispatch({ // action
    type: 'add',
    text: req.body.text
  });
  res.send(req.body);
});

app.listen(3000, () => console.log('서버가 가동 중입니다.'));
