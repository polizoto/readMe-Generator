const generateLicense = license => {
  if (!license) {
    return '';
  }
  return `
  https://img.shields.io/github/license/${name}/${github}
  `;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

module.exports = markdownData => {
  // destructure page data by section
  const { name, license, github, ...page } = markdownData;

  return `
  ## ${name}

  ${generateLicense(license)}

  ## Description

  ${page.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Features](#features)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)

  ## Installation
  ${page.installation}
  ## Features
  ${page.features}
  ## Usage
  ${page.usage}
  ## Contributing
  ${page.contribute}
  ## Tests
  ${page.tests}
  ## License
  ${page.license}
  ## Questions
  ${page.contact}
  `;
};

