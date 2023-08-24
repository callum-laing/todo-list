(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function p(){const e=document.querySelector("#mainContent");e.innerHTML=`<div class="content-title">
        <h2>Home</h2>
      </div>
      <div id="addTaskBtn" class="task-list">
        <button class="add-task"><svg class="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>plus</title>
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg> Add Task</button>
      </div>`}function f(){const e=document.querySelector("#mainContent");e.innerHTML=`<div id="taskForm" class="hidden">
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
    </div>`}var d={page:"home",projects:[]};function v(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}function b(){const e=document.querySelector("#new-project");document.createElement("div").classList.add("newProject");const n=document.createElement("form");e.appendChild(n);const o=document.createElement("input");o.id="newProjectText",o.type="text",o.setAttribute("minlength","3"),o.required=!0,n.appendChild(o);const c=document.createElement("input");c.id="confirmProject",c.type="submit",c.value="✓",n.appendChild(c);const t=document.createElement("input");t.id="cancelProject",t.type="submit",t.value="✗",n.appendChild(t);const r=document.querySelector("#confirmProject"),i=document.querySelector("#cancelProject"),l=u=>{o.checkValidity()||o.invalid(),u.preventDefault();const m=document.querySelector("#newProjectText").value;P(m),r.removeEventListener("click",l),i.removeEventListener("click",a),e.innerHTML=""},a=()=>{r.removeEventListener("click",l),i.removeEventListener("click",a),e.innerHTML=""};r.addEventListener("click",l),i.addEventListener("click",a)}function j(){return d.projects.map(e=>`<div class="project-title-list"><li> ${e.title} </li> <button class="project-btn" id="btn-${e.id}"> X </button></div>`).reduce((e,n)=>e+n,[])}function s(){const e=document.querySelector("#project-list");e.innerHTML=j(),d.projects.forEach(n=>{document.querySelector(`#btn-${n.id}`).addEventListener("click",()=>h(n.id))}),p(),document.getElementById("addTaskBtn").addEventListener("click",()=>{f()})}const y=document.querySelector("#homeLink");y.addEventListener("click",()=>{s()});function P(e){d.projects.push({title:e,id:v()}),s()}function h(e){d.projects=d.projects.filter(n=>n.id!==e),s()}function L(){document.querySelector("#addProject").addEventListener("click",b),s()}L();
