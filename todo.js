// Load saved Todo items from localStorage.
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");

  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem === "" || todoDate === "") {
    alert("Please enter todo and date");
    return;
  }

  todoList.push({
    item: todoItem,
    dueDate: todoDate,
  });

  // Save the updated Todo list so it remains after refreshing the page.
  localStorage.setItem("todoList", JSON.stringify(todoList));

  inputElement.value = "";
  dateElement.value = "";

  displayItems();
}

function deleteTodo(index) {
  todoList.splice(index, 1);

  // Update localStorage after deleting the Todo item.
  localStorage.setItem("todoList", JSON.stringify(todoList));

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;

    newHtml += `
      <span>${item}</span>

      <span>${dueDate}</span>

      <button 
        class="delete-button" 
        onclick="deleteTodo(${i})"
      >
        Delete
      </button>
    `;
  }

  containerElement.innerHTML = newHtml;
}
