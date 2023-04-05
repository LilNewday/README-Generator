// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license does your project have?',
    choices: ['MIT', 'BSD 3', 'GPL 3', 'ISC', 'Apache 2.0', 'Unlicense', 'N/A'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) {
            console.error('Error generating README:', err);
            return;
        }
        console.log('README generated successfully!!');
    });
} 

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(function(inquirerResponses) {
      console.log('Creating README...');
      const title = inquirerResponses.title;
      console.log('Title:', title);
      writeToFile(`${title}.md`, generateMarkdown({ ...inquirerResponses, title }));
    });    
  }

// Function call to initialize app
init();
