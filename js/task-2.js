const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.createElement('li');
listRef.classList.add('ingredients-list');

const titleRef = document.createElement('h2');
titleRef.textContent = ingredients.name;
titleRef.classList.add('ingredients-list_title');
console.log(titleRef);

listRef.append(titleRef);

console.log(listRef);
