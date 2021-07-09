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
    name: "description",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the title of the project?",
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
