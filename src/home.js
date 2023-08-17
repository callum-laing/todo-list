function homeTab() {
  const homePage = document.querySelector("#mainContent");
  homePage.innerHTML = `<div class="content-title">
        <h2>Home</h2>
      </div>
      <div class="task-list">
        <button class="add-task"><svg class="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>plus</title>
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg> Add Task</button>
      </div>`;
  return homePage;
}

export default homeTab();
