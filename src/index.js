import "./style.css";
import './script.js';
import "./components.js";
import { displayProject,displayProjectTodo} from "./components.js";
import {allProjects, createProject } from "./script.js";

document.addEventListener('DOMContentLoaded', () => {
   displayProject();

   // Ensure "Home" is created and displayed if there are no projects
   if (allProjects.length === 0) {
      createProject('Home');
   }

   // Display the first project in the list, defaulting to "Home"
   if (allProjects.length > 0) {
      displayProjectTodo(allProjects[0]);
   }
});