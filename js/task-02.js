const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liIngredients = document.querySelector("#ingredients");

const ingredient = ingredients.map((item) => {
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  return element;
});

liIngredients.append(...ingredient);
