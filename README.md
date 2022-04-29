# react-tutorial-02  


## Built With  
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript// "JavaScript documentation")  
* [React](https://reactjs.org// "React Documentation")  

## Getting Started  
### Prerequisites
* [Node.js](https://nodejs.org/en/ "Download Node.js 16.15.0 LTS")  

### Project Setup (VS Code)
* React  
  * Create React .gitignore file  
  ```bash
  npx react-gitignore
  ``` 
  * Create React App  
  ```bash
  npx create-react-app .
  ```   
  * Delete all files in the src/ folder  
  * Add index.js  
  * Add these lines on top of the index.js file  
  ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
  ```  
  * Run the project and open http://localhost:3000
  ```bash
  npm start
  ```   
  * Add uuid library  
  ```bash
  npm i uuid
  ```

### Programming Topics practiced to get things done  
#### 1- To-do List (React)  
* Overview  
  * React Project creation
  * Using ES7 React extension snippets  
  * Component creation  
  * Passing data through props  
  * Event handling  
  * State management  
  * Dom element reference

* To Do  
- [ ] ❔  

### Error messages for future reference  
❌ Warning: Each child in a list should have a unique "key" prop.  
**Solution**  Add a key parameter to the component ```<Todo key={todo} todo={todo} />```  
❌ Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?    
**Solution** Add ```<>Components</>``` in the component return (fragment).  
❌ 'TodoList' is not defined.  
**Solution** Add ```import TodoList from './TodoList'``` to the file.  
✖ This component is not running in strict mode.  
**Solution**  Change ```root.render(<Game />);``` to ```  root.render(<React.StrictMode><Game /></React.StrictMode>);```  
✖ Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".  
**Solution:** Change ```import ReactDOM from 'react-dom';``` to ```import ReactDOM from 'react-dom/client';```  
✖ ERROR in Plugin "react" was conflicted between "package.json and BaseConfig.  
**Solution:** Open package.json and hit ctrl + save (temporary workaround). Changed directory structure that was case sensitive (real solution).     
  
