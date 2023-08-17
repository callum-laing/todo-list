import homeTab from "./src/home";

function loadInitialContent(mainContent) {
  const container = document.querySelector("#mainContent");
  container.appendChild(homeTab);
}

document.addEventListener("DOMContentLoaded", () => {
  loadInitialContent(homeTab);

  const homeLink = document.querySelector("#homeLink");
  homeLink.addEventListener("click", () => {
    loadInitialContent(homeTab);
  });
});
