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
    return `${description1}. ${description2}. ${description3}. ${description4}.`;
  }
  return "";
}

function renderInstallationSection(installation) {
  if (installation) {
    return `${installation}`;
  }
  return "No Installation process";
}



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

## Installation

${renderInstallationSection(data.installation)}

## Usage

## Contribution

## License

${renderLicenseSection(data.license)}

## Tests

`;
}



// 
// 
// 
// Provide instructions and examples for use. Include screenshots as needed.
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```
// ## Credits
// List your collaborators, if any, with links to their GitHub profiles.
// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
// If you followed tutorials, include links to those here as well.

// 
// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
// 
// Go the extra mile and write tests for your application. Then provide examples on how to run them here.




module.exports = generateMarkdown;
