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
    message: "What was your motivation for the project?",
  },
  {
    type: "input",
    name: "description2",
    message: "Why did you build this project?",
  },
  {
    type: "input",
    name: "description3",
    message: "What problem does the project solve",
  },
  {
    type: "input",
    name: "description4",
    message: "What did you learn?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "contributions",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "test",
    message: "What is the title of the project?",
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
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the title of the project?",
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
