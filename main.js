import renderHome from "./src/home";

var state = {
  page: "home",
  projects: [],
};

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function navigatePage(page) {
  state.page = page;
  renderContent();
}

function renderProjects() {
  return state.projects
    .map((project) => {
      return `<div class="project-title-list"><li> ${project.title} </li> <button class="project-btn" id="btn-${project.id}"> X </button></div>`;
    })
    .reduce((acc, elm) => acc + elm, []);
}
console.log(renderProjects());

function renderContent() {
  const projectListEl = document.querySelector("#project-list");
  projectListEl.innerHTML = renderProjects();
  state.projects.forEach((project) => {
    document
      .querySelector(`#btn-${project.id}`)
      .addEventListener("click", () => removeProject(project.id));
  });

  if (state.page == "home") {
    console.log("works");
    renderHome();
  }
}

const homeLink = document.querySelector("#homeLink");
homeLink.addEventListener("click", () => {
  renderContent();
});

function addProject(name) {
  state.projects.push({
    title: name,
    id: uuidv4(),
  });
  renderContent();
}

function removeProject(uuid) {
  state.projects = state.projects.filter((p) => p.id !== uuid);

  renderContent();
}

renderContent();
addProject("tweedle");
addProject("dum");
addProject("random");
addProject("dee");
removeProject("dee");
removeProject("tweedle");
