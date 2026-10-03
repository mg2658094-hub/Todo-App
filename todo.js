// Get the saved Todo list from localStorage.
// If no Todo list is saved, use an empty array.
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];


// Display all saved Todo items when the page loads.
displayItems();


// Function to add a new Todo item.
function addTodo() {

  // Get the Todo input element from the HTML.
  let inputElement = document.querySelector("#todo-input");

  // Get the date input element from the HTML.
  let dateElement = document.querySelector("#todo-date");


  // Get the Todo text and remove extra spaces from the beginning and end.
  let todoItem = inputElement.value.trim();

  // Get the selected Todo date.
  let todoDate = dateElement.value;


  // Check if the Todo text or date is empty.
  if (todoItem === '' || todoDate === '') {

    // Show a message if the user has not entered both values.
    alert("Please enter todo and date");

    // Stop the function.
    return;
  }


  // Add the new Todo item and date to the Todo list.
  todoList.push({
    item: todoItem,
    dueDate: todoDate
  });


  // Save the updated Todo list in localStorage.
  // JSON.stringify() converts the array into a string.
  localStorage.setItem(
    'todoList',
    JSON.stringify(todoList)
  );


  // Clear the Todo input box after adding the Todo.
  inputElement.value = '';

  // Clear the date input after adding the Todo.
  dateElement.value = '';


  // Refresh the Todo list on the webpage.
  displayItems();
}


// Function to delete a Todo item.
function deleteTodo(index) {

  // Remove the Todo item at the given index.
  todoList.splice(index, 1);


  // Save the updated Todo list in localStorage.
  localStorage.setItem(
    'todoList',
    JSON.stringify(todoList)
  );


  // Refresh the Todo list after deleting the item.
  displayItems();
}


// Function to display all Todo items on the webpage.
function displayItems() {

  // Find the container where Todo items will be displayed.
  let containerElement =
    document.querySelector(".todo-container");


  // Create an empty string to store the Todo HTML.
  let newHtml = "";


  // Loop through all Todo items in the Todo list.
  for (let i = 0; i < todoList.length; i++) {

    // Get the Todo text.
    let item = todoList[i].item;

    // Get the Todo due date.
    let dueDate = todoList[i].dueDate;


    // Create HTML for the current Todo item.
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


  // Display all generated Todo HTML inside the container.
  containerElement.innerHTML = newHtml;
}