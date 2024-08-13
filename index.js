const allProjects = [];
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
      this.date = Date.now();
      this.name = name;
      this.todos = [];
   }
}

function createProject(name) {
   const newProject = new Project(name);
   allProjects.push(newProject);
   console.log(newProject);
}

function createTodo(title, description, dueDate, projectName) {
   const newTodo = new TodoItem(title, description, dueDate, projectName);

   allTodos.push(newTodo);

   searchTodo(newTodo);
}

function searchTodo(newTodo) {
   let index = -1;

   for(let project of allProjects) {
      if(project['name'] == "Home") {
         index = allProjects.findIndex(project => project.name == 'Home');
         console.log(index);
      };
   }

   if(allProjects.length < 1) {
      let Home = createProject('Home');
      allProjects[0].todos.push(newTodo); 
      console.log('Home created')
   } else if(allProjects.length > 0) {
      if(index !== -1 || index !== undefined) {
         allProjects[index]['todos'].push(newTodo);
      } else {
         allProjects[0].todos.push(newTodo); 
      }
   }
   
}


// createProject('Home');
createTodo('Cook', 'I am coming', Date.now(), 'Pro');
console.log(allProjects);