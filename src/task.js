function taskCreation() {
  const taskPopup = document.querySelector("#mainContent");
  taskPopup.innerHTML = `<div id="taskForm" class="hidden">
        <form id="taskFormFields">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required><br>

            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea><br>

            <label for="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" required><br>

            <button type="submit">Submit</button>
        </form>
    </div>`;
  return taskPopup;
}

export default taskCreation;
