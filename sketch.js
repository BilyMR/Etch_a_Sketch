const grid = document.getElementById("grid");
const resetBtn = document.getElementById("reset");
const apply = document.getElementById("apply");
let value = document.getElementById("value");
let input = document.getElementById("input");
let cantidad = 8;

createGrid(cantidad);

//funcion para crear los divs en el grid
function createSquares(size) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  return div;
}

//funcion para crear el grid
function createGrid(squareSize) {
  for (let i = 0; i < squareSize; i++) {
    for (let j = 0; j < squareSize; j++) {
      grid.appendChild(createSquares(grid.clientWidth / squareSize));
    }
  }
}

// funcion para resetear el grid y dejarlo en el default
function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild)
  }
  createGrid(cantidad);
}

grid.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square")) {
    e.target.classList.add("active");
  }
});

input.addEventListener("click", (e) => {
  cantidad = e.target.value;
  value.textContent = `${cantidad} x ${cantidad}`;
});

apply.addEventListener('click', function () {
  reset();
});

resetBtn.addEventListener('click', reset);


