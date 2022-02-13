window.addEventListener("load", function () {
  let todoList = [];
  if (localStorage.getItem("todo") != undefined) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    result();
  }

  document.getElementById("btn").onclick = function () {
    let tete = document.getElementById("input-todo").value;
    // {todo : добавить хлеб, check: false}
    let temp = {};
    temp.todo = tete;
    temp.check = false;
    let i = todoList.length;
    todoList[i] = temp;
    console.log(todoList);
    result();
    localStorage.setItem("todo", JSON.stringify(todoList));
  };

  function result() {
    let result = "";
    for (let key in todoList) {
      if (todoList[key].check == true) {
        result += '<input type="checkbox" checked>';
      } else {
        result += '<input type="checkbox">';
      }
      result += todoList[key].todo + "<br>";
    }
    document.getElementById("result").innerHTML = result;
  }
});
