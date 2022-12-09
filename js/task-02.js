
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const menuUl = document.querySelector('#ingredients')


const end = ingredients.map((el) => {

  const heading = document.createElement('li');
  heading.textContent = el
  heading.classList.add('item')
 
  console.log(heading);


  return heading
 
})
menuUl.append(...end)

 console.log(end);