import { compareAsc, format } from "date-fns";

export const allProjects = [];
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

export function createProject(name) {
   const newProject = new Project(name);
   allProjects.push(newProject);
}

export function createTodo(title, description, dueDate, projectName) {
   const newTodo = new TodoItem(title, description, dueDate, projectName);

   allTodos.push(newTodo);

   searchTodo(newTodo);
}

function searchTodo(newTodo) {
   let index = -1;

   index = allProjects.findIndex(project => project.name == newTodo.projectName);
   console.log(index + " hi");

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
   
}


createProject('Home');
// createProject('Holi');
// createProject('Holisss');

createTodo('Cook', 'I am coming', format(new Date(), 'yyyy-MM-dd'), 'Pro');
// createTodo('Cooksssss', 'I am comings', format(new Date(), 'yyyy-MM-dd'), 'Holi');
// createTodo('man', 'I am comings', format(new Date(), 'yyyy-MM-dd'), 'Holisss');
// createTodo('man', 'I am comings', format(new Date(), 'yyyy-MM-dd'), 'Holisss');
// console.log(allProjects[0]['todos'][0].projectName);
// console.log(allProjects);
