// Call required apps
const inquirer = require('inquirer');

const { writeFile } = require('./utils/generate-readme.js');

const generateReadme = require('./src/readMe-template.js');

const questions = [
  {
      type: 'input',
      name: 'name',
      message: "What's your name?",
  },
];

// ReadMe Questions
const promptUser = () => {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInfo => {
          if (nameInfo) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?',
      validate: gitHubInfo => {
        if (gitHubInfo) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is the name of your app / project?',
      validate: projectInfo => {
        if (projectInfo) {
          return true;
        } else {
          console.log('Please enter info abpout your project!');
          return false;
        }
      }
    },
    {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description (what, why, and how):',
    validate: descriptionInfo => {
      if (descriptionInfo) {
        return true;
      } else {
        console.log('Please enter a description of your app!');
        return false;
      }
    }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the app (use ` around code)?',
        validate: installInfo => {
          if (installInfo) {
            return true;
          } else {
            console.log('Please enter installation info about your app!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'features',
        message: 'Briefly list the features of your app (use - before list items):',
        validate: featuresInfo => {
          if (featuresInfo) {
            return true;
          } else {
            console.log('Please enter info about the features in your app!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Briefly list the steps of how to use your app (use - before list items):',
        validate: usageInfo => {
          if (usageInfo) {
            return true;
          } else {
            console.log('Please enter info about how to use your app!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can users contribute to your project?',
        validate: contributeInfo => {
          if (contributeInfo) {
            return true;
          } else {
            console.log('Please enter info about how people can contribute to your app!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'feedback',
        message: 'How can users give you feedback or add issues about your project?',
        validate: feedbackInfo => {
          if (feedbackInfo) {
            return true;
          } else {
            console.log('Please enter how people can add feedback!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter your email address where users can contact you:',
        validate: contactInfo => {
          if (contactInfo) {
            return true;
          } else {
            console.log('Please enter your contact info!');
            return false;
          }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What is the license for your app?',
        choices: ['MIT', 'Apache', 'GNU', 'Modified BSD License', 'Simplified BSD License', 'Mozilla'],
        validate: licenseInfo => {
          if (licenseInfo) {
            return true;
          } else {
            console.log('Please enter info the license for your app!');
            return false;
          }
        }
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