const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liIngredients = document.querySelector(`#ingredients`);

for (let ingredient of ingredients) {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.className = "item";
  liIngredients.append(element);
}
console.log(liIngredients);
