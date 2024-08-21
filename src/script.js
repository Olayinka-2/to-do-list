import { compareAsc, format } from "date-fns";

const allTodos = [];


class TodoItem {
   constructor(title, description, dueDate, projectName) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.projectName = projectName;
   }
}

class Project {
   constructor(name) {
      this.date = format(new Date(2014, 1, 11), "yyyy-MM-dd");
      this.name = name;
      this.todos = [];
   }
}

let Home = new Project('Home');
export const allProjects = JSON.parse(localStorage.getItem('allProjects')) || [Home];

export function createProject(name) {
   const newProject = new Project(name);
   allProjects.push(newProject);
   updateLocalStorage();
}

export function createTodo(title, description, dueDate, projectName) {
   const newTodo = new TodoItem(title, description, dueDate, projectName);

   allTodos.push(newTodo);

   searchTodo(newTodo);
}

function searchTodo(newTodo) {
   let index = -1;

   index = allProjects.findIndex(project => project.name == newTodo.projectName);

   if(allProjects.length < 1) {
      let Home = createProject('Home');
      allProjects[0].todos.push(newTodo); 
   } 
   
   if(allProjects.length > 0) {
      if(index !== -1 && index !== undefined) {
         allProjects[index]['todos'].push(newTodo);
      } else {
         allProjects[0].todos.push(newTodo); 
      }
   }
   updateLocalStorage();
}

function updateLocalStorage() {
   localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

