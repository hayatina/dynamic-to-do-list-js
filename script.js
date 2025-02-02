// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements and store them in constants
  const addButton = document.getElementById("add-task-btn"); // Add Task button
  const taskInput = document.getElementById("task-input"); // Input field for new tasks
  const taskList = document.getElementById("task-list"); // Unordered list to display tasks

  // Function to add a new task to the list
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim the input value
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
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);
    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = ""; // Reset input field
  }

  // Add event listener for the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Add event listener for the "Enter" key press to add tasks
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Check if the pressed key is "Enter"
      addTask(); // Call addTask function
    }
  });
});
