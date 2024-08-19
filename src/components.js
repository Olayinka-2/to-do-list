import {allProjects, createProject} from './script.js';

const projectList = document.querySelector('.project-list');
const todoContainer = document.querySelector('.todo-container');
const addProjectDiv = document.querySelector('.addItem');
const addProjectBtn = document.querySelector('.cta');

addProjectBtn.addEventListener("click", event => {
   const projectForm = document.querySelector('.project-form');
   projectForm.style.display = 'block';

   const projectBtn = document.querySelector('.projectBtn');
   projectBtn.addEventListener('click', event => {
      const projectName = document.querySelector('#projectName').value;
      createProject(projectName);
      displayProject();
      projectForm.style.display = 'none';
   })
});



function displayProject() {
   allProjects.forEach(project => {
      const projectDiv = document.createElement('div');
      const boxPoint = document.createElement('div');
      const projectName = document.createElement('div');

      projectDiv.classList.add('project');
      boxPoint.classList.add('box-point');
      projectName.textContent = project['name'];

      projectDiv.append(boxPoint, projectName);

      projectList.appendChild(projectDiv);
   });
}

displayProject();

function displayProjectTodo(element) {
   const todoCard = document.createElement('div');
   const titleParagraph = document.createElement('p');
   const dateParagraph = document.createElement('p');
   const editParagraph = document.createElement('p');
   const detailsBtn = document.createElement('button');
   const deleteBtn = document.createElement('button');

   titleParagraph.textContent = element.title;
   dateParagraph.textContent = element.dueDate;
   editParagraph.textContent = 'Edit';
   detailsBtn.textContent = "Details";
   deleteBtn.textContent = 'Delete';

   todoCard.classList.add('todo-card');
   detailsBtn.classList.add('push');

   todoCard.append(titleParagraph, detailsBtn, dateParagraph, editParagraph, deleteBtn);
   todoContainer.appendChild(todoCard);
}

displayProjectTodo(allProjects[0]);

allProjects.forEach(project => {
   project.addEven
});