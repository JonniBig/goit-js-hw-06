const fontSize = document.getElementById(`font-size-control`);
const text = document.getElementById(`text`);

fontSize.addEventListener(`input`, changeSize);

function changeSize(event) {
  text.setAttribute(`style`, `font-size: ${event.currentTarget.value}px`);
}
