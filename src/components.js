import {allProjects, createProject, createTodo, updateLocalStorage} from './script.js';

const projectList = document.querySelector('.project-list');
const todoContainer = document.querySelector('.todo-container');
const addProjectDiv = document.querySelector('.addItem');
const addProjectBtn = document.querySelector('.cta');
const addTodoItem = document.querySelector('.addTodoItem');
const itemDialog = document.querySelector('.itemDialog');
const addItemToProject = document.querySelector('.addItemToProject');
const closeDialog = document.querySelector('.closeDialog');
const todoName = document.querySelector('.todoName');

let isEditing = false;
let currentTodo = null;

addTodoItem.addEventListener('click', event => {
   isEditing = false; // Reset to "add mode"
   itemDialog.showModal();

   // Clear previous input values
   document.querySelector('#title').value = '';
   document.querySelector('#dueDate').value = '';
   document.querySelector('#itemProjectName').value = '';
   document.querySelector('#description').value = '';

   closeDialog.addEventListener('click', () => {
      itemDialog.close();
   }, { once: true });
});

addItemToProject.addEventListener('click', event => {
   const title = document.querySelector('#title').value;
   const dueDate = document.querySelector('#dueDate').value;
   const itemProjectName = document.querySelector('#itemProjectName').value;
   const description = document.querySelector('#description').value;

   if (title !== "" && dueDate !== "") {
      if (isEditing) {
         // Update the current todo
         currentTodo.title = title;
         currentTodo.dueDate = dueDate;
         currentTodo.description = description;

         // Update the DOM and local storage
         updateLocalStorage();
         todoContainer.innerHTML = ""; // Clear the container
         displayProjectTodo(allProjects.find(proj => proj.name === itemProjectName)); // Re-display todos

      } else {
         // Create a new todo
         createTodo(title, description, dueDate, itemProjectName);
      }
      itemDialog.close();
   }
});

function setupEditTodoDialog(elements, element) {
   isEditing = true; // Set to "edit mode"
   currentTodo = elements; // Store the current todo being edited

   // Pre-fill the dialog with existing todo values
   document.querySelector('#title').value = elements.title;
   document.querySelector('#dueDate').value = elements.dueDate;
   document.querySelector('#itemProjectName').value = element.name;  // Assuming project name doesn't change
   document.querySelector('#description').value = elements.description;

   // Show the dialog to edit the todo
   itemDialog.showModal();

   closeDialog.addEventListener('click', () => {
      itemDialog.close();
   }, { once: true });
}


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
   projectList.innerHTML = "";
   allProjects.forEach((project, projectIndex) => {
      const projectDiv = document.createElement('div');
      const boxPoint = document.createElement('div');
      const projectName = document.createElement('div');
      const deleteIcon = document.createElement('div');
      boxPoint.classList.add('box-point');
      projectDiv.classList.add('project', project['name']);
      projectName.textContent = project['name'];

      deleteIcon.classList.add('deleteIcon');
      deleteIcon.innerHTML = `<span class="material-symbols-outlined">
      delete
      </span>`;


      projectDiv.append(boxPoint, projectName, deleteIcon);

      projectList.appendChild(projectDiv);

      deleteIcon.addEventListener('click', () => {
         allProjects.splice(projectIndex, 1);
         updateLocalStorage();
         projectDiv.remove();
      })
   });
}

export function displayProjectTodo(element) {
   element['todos'].forEach((elements, todoIndex) => {
      const todoCard = document.createElement('div');
      const titleParagraph = document.createElement('p');
      const dateParagraph = document.createElement('p');
      const editButton = document.createElement('button');
      const detailsBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
   
      titleParagraph.textContent = elements.title;
      dateParagraph.textContent = elements.dueDate;
      editButton.textContent = 'Edit';
      editButton.classList.add('editBtn');
      detailsBtn.textContent = "Details";
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete');
   
      todoCard.classList.add('todo-card');
      detailsBtn.classList.add('push');
   
      todoCard.append(titleParagraph, detailsBtn, dateParagraph, editButton, deleteBtn);
      todoContainer.appendChild(todoCard);

      deleteBtn.addEventListener('click', () => {
         element['todos'].splice(todoIndex, 1);
         updateLocalStorage();
         todoCard.remove();
      });

      editButton.addEventListener('click', () => {
         setupEditTodoDialog(elements, element);
      });

      detailsBtn.addEventListener('click', () => {
         const detailsDialog = document.querySelector('.detailsDialog');

         // Mock data for demonstration
         document.querySelector('#detailsTitle').value = elements.title;
         document.querySelector('#detailsDescription').value = elements.description;
         document.querySelector('#detailsDueDate').value = elements.dueDate;
         document.querySelector('#detailsProjectName').value = element.name;

         detailsDialog.showModal();
      });
      
   });
   todoName.textContent = element.name + " Project";
}


projectList.addEventListener('click', event => {
   let projectTarget = event.target;
   let index = -1

   allProjects.forEach((project) => {
      index = allProjects.findIndex(project => project.name == projectTarget.textContent);
      if(projectTarget.className.includes(project.name)) {
         todoContainer.innerHTML = "";
         displayProjectTodo(allProjects[index]);
      }
   })
});
