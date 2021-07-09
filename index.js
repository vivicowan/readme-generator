const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  // ask user for title and license
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description1",
    message: "What was your motivation for the project? Please write in complete sentences.",
  },
  {
    type: "input",
    name: "description2",
    message: "Why did you build this project? Please write in complete sentences.",
  },
  {
    type: "input",
    name: "description3",
    message: "What problem does the project solve? Please write in complete sentences.",
  },
  {
    type: "input",
    name: "description4",
    message: "What did you learn? Please write in complete sentences.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "contributions",
    message: "What are some of the ways other developers can contribute to the project? You can include guidelines for how to do so.",
  },
  {
    type: "input",
    name: "test",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: [
      "MIT",
      "ISC",
      "GPL v3",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username, so people can find you?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email, so people can reach you?",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err.message);
      console.log("Failed");
    } else {
      console.log("Created README.md in the output folder.");
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const md = generateMarkdown(answers);
    writeToFile("output/README.md", md);
  });
}

init();
