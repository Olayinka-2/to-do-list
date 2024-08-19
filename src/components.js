import {allProjects, createProject, createTodo} from './script.js';

const projectList = document.querySelector('.project-list');
const todoContainer = document.querySelector('.todo-container');
const addProjectDiv = document.querySelector('.addItem');
const addProjectBtn = document.querySelector('.cta');
const addTodoItem = document.querySelector('.addTodoItem');
const itemDialog = document.querySelector('.itemDialog');
const addItemToProject = document.querySelector('.addItemToProject');
const closeDialog = document.querySelector('.closeDialog');

addTodoItem.addEventListener('click', event => {
   itemDialog.showModal();
   closeDialog.addEventListener('click', () => {
      itemDialog.close();
   })
});

addItemToProject.addEventListener('click', event => {
   const title = document.querySelector('#title').value;
   const dueDate = document.querySelector('#dueDate').value;
   const itemProjectName = document.querySelector('#itemProjectName').value;
   const description = document.querySelector('#description').value;

   if(title !== "" && dueDate !== "") {
      createTodo(title, description, dueDate, itemProjectName);
      itemDialog.close();
   }
});

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



export function displayProject() {
   allProjects.forEach(project => {
      const projectDiv = document.createElement('div');
      const boxPoint = document.createElement('div');
      const projectName = document.createElement('div');

      projectDiv.classList.add('project', project['name']);
      boxPoint.classList.add('box-point');
      projectName.textContent = project['name'];

      projectDiv.append(boxPoint, projectName);

      projectList.appendChild(projectDiv);
   });
}

// displayProject();

export function displayProjectTodo(element) {
   element['todos'].forEach((elements) => {
      const todoCard = document.createElement('div');
      const titleParagraph = document.createElement('p');
      const dateParagraph = document.createElement('p');
      const editParagraph = document.createElement('p');
      const detailsBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
   
      titleParagraph.textContent = elements.title;
      dateParagraph.textContent = elements.dueDate;
      editParagraph.textContent = 'Edit';
      detailsBtn.textContent = "Details";
      deleteBtn.textContent = 'Delete';
   
      todoCard.classList.add('todo-card');
      detailsBtn.classList.add('push');
   
      todoCard.append(titleParagraph, detailsBtn, dateParagraph, editParagraph, deleteBtn);
      console.log()
      todoContainer.appendChild(todoCard);
   });
}


projectList.addEventListener('click', event => {
   let projectTarget = event.target;
   console.log(projectTarget);
   let index = -1

   allProjects.forEach((project) => {
      index = allProjects.findIndex(project => project.name == projectTarget.textContent);
      console.log(index)
      if(projectTarget.className.includes(project.name)) {
         todoContainer.innerHTML = "";
         displayProjectTodo(allProjects[index]);
      }
   })
});
