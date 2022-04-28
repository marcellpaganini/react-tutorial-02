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
  npx create-react-app my-app
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

### Programming Topics practiced to get things done  
#### 1- To-do List (React)  
* Overview  
  * React Project creation  
  * Component creation  
  * Passing data through props  
  * Event handling  
  * State management 

* To Do  
- [ ] D

### Error messages for future reference  
✖ This component is not running in strict mode  
**Solution**  Change ```root.render(<Game />);``` to ```  root.render(<React.StrictMode><Game /></React.StrictMode>);```  
✖ Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".  
**Solution:** Change ```import ReactDOM from 'react-dom';``` to ```import ReactDOM from 'react-dom/client';```  
✖ ERROR in Plugin "react" was conflicted between "package.json and BaseConfig  
**Solution:** Open package.json and hit ctrl + save (temporary workaround). Changed directory structure that was case sensitive (real solution).     
  
