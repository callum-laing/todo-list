function taskCreation() {
  const taskPopup = document.querySelector("#mainContent");
  taskPopup.innerHTML = `<div id="taskForm" class="hidden">
  <h2 class="form-title">Add Task</h2>
        <form id="taskFormFields">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required><br>

            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea><br>

            <label for="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" required><br>

            <button id="form-submit-btn" type="submit">Submit</button>
        </form>
    </div>`;
}

export default taskCreation;
