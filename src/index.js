import "./style.css";
import './script.js';
import "./components.js";
import { displayProject,displayProjectTodo} from "./components.js";
import {allProjects, createProject } from "./script.js";

document.addEventListener('DOMContentLoaded', () => {
   displayProject();
   if (allProjects.length > 0) {
      displayProjectTodo(allProjects[0]);
   }
});
