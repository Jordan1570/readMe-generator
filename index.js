// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the title?'
    },
    {
        type: 'input',
        name: 'installation-instrcutions',
        message: 'What are your installation instructions?'
    },
    {
        type: 'input',
        name: 'usage-information',
        message: 'What is your usage information?'
    },
    {
        type: 'input',
        name: 'contribution-guidelines',
        message: 'What are your contribution guidelines?'
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'What are your test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is the application covered under?',
        choices: ['Eclipse', 'MIT', 'Mozilla'],

    }
    
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
