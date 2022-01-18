// Call required apps
const inquirer = require('inquirer');

const { writeFile } = require('./utils/generate-readme.js');

const generateReadme = require('./src/readMe-template.js');

// ReadMe Questions
const promptUser = () => {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?'
    },
    {
      type: 'input',
      name: 'project',
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
        name: 'contact',
        message: 'Enter your email address where users can contact you:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What is the license for your app?',
        choices: ['MIT', 'Apache', 'GNU', 'Modified BSD License', 'Simplified BSD License', 'Mozilla']
    },
]);
};

  promptUser()
  .then(readMeData => {
    return generateReadme(readMeData);
  })
  .then(readMeFile => {
    return writeFile(readMeFile);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
