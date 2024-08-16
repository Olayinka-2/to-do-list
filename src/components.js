import {allProjects} from './script.js';

const projectList = document.querySelector('.project-list');

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

function displayProjectTodo() {
   
}
