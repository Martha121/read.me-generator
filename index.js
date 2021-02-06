// Packages needed for this application.
const fs = require("fs");
const inquirer = require("inquirer");



//User questions.
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Write your Title's project",
        },
        {
            type: "input",
            name: "description",
            message: "Write a description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Write the steps to install the project: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "input",
            name: "collaborators",
            message: "List your collaborators, include links to their GitHub profiles"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        }
        
    ]);
} 

promptUser()
  .then(answers => console.log(answers));

  
  