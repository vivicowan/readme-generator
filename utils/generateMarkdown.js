// functione for everything the user will be asked.
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    default:
      return "";
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license.`;
  }
  return "No License";
}

function renderDescriptionSection(description1, description2, description3, description4) {
  if (description1, description2, description3, description4) {
    return `${description1} ${description2} ${description3} ${description4}`;
  }
  return "";
}

function renderInstallationSection(installation) {
  if (installation) {
    return `${installation}`;
  }
  return "No Installation process";
}

function renderUsageSection(usage) {
  if (usage) {
    return `${usage}`;
  }
  return "Visit application to understand usage.";
}

function renderContributionSection(contributions) {
  if (contributions) {
    return `${contributions}`;
  }
  return "No need for any contributions.";
}

function renderTestSection(test) {
  if (test) {
    return `${test}`;
  }
  return "No tests were used for this project.";
}

function renderGithubSection(github) {
  if (github) {
    return `My GitHub username is ${github}, this is where you can check out my code.`;
  }
  return "";
}

function renderEmailSection(email) {
  if (email) {
    return `If you have any questions, the best way to reach me is through my email ${email}.`;
  }
  return "";
}


// template literal for the information we want on README.md.
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${renderDescriptionSection(data.description1, data.description2, data.description3, data.description4,)}

## Table of Contents 

 - [Installation](#installation)
 - [Usage](#usage)
 - [Contribution](#contribution)
 - [License](#license)
 - [Tests](#tests)
 - [Questions](#questions)

## Installation

${renderInstallationSection(data.installation)}

## Usage

${renderUsageSection(data.usage)}

## Contribution

${renderContributionSection(data.contributions)}

## License

${renderLicenseSection(data.license)}

## Tests

${renderTestSection(data.test)}

## Questions

 - ${renderGithubSection(data.github)}
 - ${renderEmailSection(data.email)}
`;
}

module.exports = generateMarkdown;
