const allCategories = document.querySelectorAll('.item').length;
console.log(`В списке ${allCategories} категории`);

const textFirstCategory = document.querySelector('.title-animals');
const quantity1 = document.querySelectorAll('.animals').length;
console.log(`Категория : ${textFirstCategory.textContent}`);
console.log(`Количество элементов: ${quantity1}`);

const textSecondCategory = document.querySelector('.title-food');
const quantity2 = document.querySelectorAll('.food').length;
console.log(`Категория : ${textSecondCategory.textContent}`);
console.log(`Количество элементов: ${quantity2}`);

const textThirdCategory = document.querySelector('.title-js');
const quantity3 = document.querySelectorAll('.js').length;
console.log(`Категория : ${textThirdCategory.textContent}`);
console.log(`Количество элементов: ${quantity3}`);
