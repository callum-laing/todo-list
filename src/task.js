function taskCreation() {
  const taskPopup = document.querySelector("#mainContent");
  taskPopup.innerHTML = `<div>
<form>
<label for="title">Title:</label>
<input type="text" id="title" name="title">
  <br>
  <label for="description">Description:</label>
  <textarea name="message" style="width:150px; height: 100px;">
  </textarea>
  <br>
  <label for="date">Date:</label>
  <input type="date" id"date" date="date">
</form>
</div>`;
  return taskPopup;
}

export default taskCreation;
