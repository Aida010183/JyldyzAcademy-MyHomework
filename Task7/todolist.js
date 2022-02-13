const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");
let i = 0;
//add event
btn.addEventListener("click", (e) => {
  //   result.innerHTML += `<p>${inputTodo}</p>`
  if (input.value === "") return;
  createDeleteElements(input.value);
  input.value = "";
});

// create and delete todo
function createDeleteElements(value) {
  i++;
  const p = document.createElement("p");
  const btn = document.createElement("button");

  p.className = "p";
  p.textContent = value;

  btn.className = "btn";
  btn.textContent = "delete";
  p.appendChild(btn);

  //   remove todo
  btn.addEventListener("click", (e) => {
    i--;
    total.textContent = i;
    result.removeChild(p);
  });

  //   toggle
  p.addEventListener("click", (e) => {
    p.classList.toggle("p-active");
  });

  total.textContent = i;
  result.appendChild(p);
}
