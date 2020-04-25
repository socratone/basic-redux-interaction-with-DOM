const insertButton = document.getElementById('insert');
const removeButton = document.getElementById('remove');
const ul = document.getElementById('ul');

insertButton.addEventListener('click', () => {
  const li = document.createElement('li');
  const text = document.getElementById('text');
  li.innerText = text.value;
  ul.append(li);
});

removeButton.addEventListener('click', () => {

});

