const insertButton = document.getElementById('insert');
const removeButton = document.getElementById('remove');
const ul = document.getElementById('ul');

// init
fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    json.forEach(({ text }) => {
      const li = document.createElement('li');
      li.innerText = text;
      ul.append(li);
    });
  })
  .catch(error => console.log(error));

// insert button
insertButton.addEventListener('click', () => {
  const text = document.getElementById('text');

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ "text": text.value }),
    redirect: 'follow'
  };

  fetch("http://localhost:3000/api", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log('result :', result);
      const li = document.createElement('li');
      li.innerText = result.text;
      ul.append(li);
    })
    .catch(error => console.log('error', error));

});
