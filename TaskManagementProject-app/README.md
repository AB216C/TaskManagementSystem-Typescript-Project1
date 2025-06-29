** TASK MANAGEMENT PROJECT-TYPESCRIPT AND REACT **

# Project SET UP

The project is made of 5 important folders namely auth, components, pages, types, context, and plus a file called ".env", main.tsx, and App.tsx.

Each folder has files that play a unique role in the application. The Auth folder contains a file that is specifically designed to provide authentication for the "App" file. Before the app renders anything on the user interface it has to be authenticated.

Both components and pages folders contain files typescript-react files with ends with tsx and these files(components and pages) are rendered to the user interface once the authentication is true. It is through these files the user can interact with the application.

The types folder contains a file that is more specific for typescript and it stores all data types for a task ID, title, description, and whether completed or not. This file will be imported inside the components and pages files to be used in case there is a modification on a task such as updating, editing, deleting, viewing, or creating a task.

Context folder has an interface that is specific for type-check: To check returned values for functions such as tasks,  addTask, updateTask, deleteTask, and getTask. Plus, it contains a functional component called TaskProvider in which all task functions are pre-defined on how they will be used. Because of the useContext hook, these functions can be imported and used in any component depending on the action they are about to perform they were used in taskItem for deleting tasks, in taskList file to show a list of created tasks, in taskFormPage to addTask, getTask, and updateTask, and in taskDetails to help in viewing and editing task.

.env file is useful in authentication because it contains Domain_id and Client_ID Which are useful in the application access control and security.

main.tsx play a big role because App is wrapped in <Auth0ProviderWithHistory>App</Auth0ProviderWithHistory> to be authenticated before accessing other routes, <BrowserRouter>App</BrowserRouter> to allow navigations from one page to another without page reloads, and <TaskProvider>App</TaskProvider> to allow any component of the application to have access on the state of the tasks.

App.tsx was used as the entry point of the application. This is where the users land once they are successfully authenticated and they are able to manage their daily or weekly tasks.

# Project installations

## INSTALLED DEPENDENCIES for the application 
npm install react-router-dom uuid
npm install --save-dev @types/react-router-dom @types/uuid
## uuid
uuid: Essential for creating a unique id
uuidV4: Generete Universally Unique Identifier while creating tasks. And it is a string.
## INSTALLED AuthO React SDK 
npm install @auth0/auth0-react
# Project usage
The main goal of this project is to provide an interactive user interface in which users can freely Manage tasks using their mobile phones, tablets, and computers. This application allows the users to add an infinite number of tasks, update them when necessary, and provide completed and non-completed status to any of them to boost productivity.

# Documentations

https://www.w3schools.com/typescript/
https://www.typescriptlang.org/docs/handbook/advanced-types.html
https://developer.auth0.com/resources/guides/spa/react/basic-authentication
https://react.dev/reference/react/useContext











