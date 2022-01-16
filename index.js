// Call required apps
const inquirer = require('inquirer');

const { writeFile, copyFile } = require('./utils/generate-readme.js');

const generateReadme = require('./src/readMe-template.js');

// ReadMe Questions
const promptUser = () => {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your app / project?'
      },
    {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description (what, why, and how):'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the app (use ` around code)?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Briefly list the features of your app (use - before list items):'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Briefly list the steps of how to use your app (use - before list items):'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can users contribute to your project?'
    },
    {
        type: 'input',
        name: 'feedback',
        message: 'How can users give you feedback or add issues about your project?'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter the path where a screenshot is located:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license for your app?'
    },
]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
promptUser();
