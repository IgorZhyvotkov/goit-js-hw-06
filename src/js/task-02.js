const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')

const ingredientsItemRef = ingredients.map((item) => {  
  const ingredientsItem = document.createElement('li')
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = item;
  
  return ingredientsItem;
})

ingredientsRef.append(...ingredientsItemRef)
