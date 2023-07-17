const categories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categories.length}`);

categories.forEach(function listEl(item) {
  const title = item.querySelector(`h2`);
  console.log(`Category: ${title.textContent}`);

  const elCategories = item.querySelectorAll(`li`);
  console.log(`Elements: ${elCategories.length}`);
});
