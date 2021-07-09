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
 - [Questions](#questions)

## Installation

${renderInstallationSection(data.installation)}

## Usage

## Contribution

## License

${renderLicenseSection(data.license)}

## Tests

## Questions

`;
}


// Go the extra mile and write tests for your application. Then provide examples on how to run them here.




module.exports = generateMarkdown;
