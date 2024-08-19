import "./style.css";
import './script.js';
import "./components.js";
import { displayProject,displayProjectTodo} from "./components.js";
import { allProjects } from "./script.js";

document.addEventListener('DOMContentLoaded', displayProject);

displayProjectTodo(allProjects[0]);

