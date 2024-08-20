import "./style.css";
import './script.js';
import "./components.js";
import { displayProject,displayProjectTodo} from "./components.js";
import { allProjects } from "./script.js";

document.addEventListener('DOMContentLoaded', displayProject);

displayProjectTodo(allProjects[0]);

localStorage.setItem('allProjects', JSON.stringify(allProjects));
let man = localStorage.getItem('items', JSON.parse(allProjects));
console.log(man);
console.log(localStorage);