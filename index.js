// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of this project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is the application covered under?',
        choices: ['EPL', 'MIT', 'Mozilla', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command do you run to install dependencies?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command do you run to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    },
])
.then((data) => {
     console.log(data);
    var readMe = generateMarkdown(data)
    
       
    fs.writeFile('readMe.md', readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});


// // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
