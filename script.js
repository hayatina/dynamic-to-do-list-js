// Get references to DOM elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to load tasks from Local Storage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Function to add a new task to the list
function addTask(taskText, save = true) {
  if (taskText === undefined) {
    taskText = taskInput.value.trim(); // Get and trim the input value
  }

  if (taskText === "") {
    // Check if the input is empty
    alert("Please enter a task."); // Alert user if empty
    return; // Exit the function if the input is empty
  }

  // Create a new list item for the task
  const listItem = document.createElement("li");
  listItem.textContent = taskText; // Set the text of the list item

  // Create a remove button for the task
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove"; // Set button text
  removeButton.classList.add("remove-btn"); // Use classList.add to set button class

  // Assign an onclick event to the remove button
  removeButton.onclick = function () {
    taskList.removeChild(listItem); // Remove the list item from the task list
    removeTaskFromLocalStorage(taskText); // Remove task from Local Storage
  };

  // Append the remove button to the list item
  listItem.appendChild(removeButton);
  // Append the list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field after adding the task
  taskInput.value = ""; // Reset input field

  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}

// Function to remove a task from Local Storage
function removeTaskFromLocalStorage(taskText) {
  let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks = storedTasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

// Add event listener for the "Add Task" button
addButton.addEventListener("click", () => addTask());

// Add event listener for the "Enter" key press to add tasks
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Check if the pressed key is "Enter"
    addTask(); // Call addTask function
  }
});

// Load tasks when the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});
