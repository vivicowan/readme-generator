const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  // ask user for title and license
  {
    type: "input",
    name: "title",
    message: "What is the app title?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: [
      "MIT",
      "ISC",
      "GPL v3",
      {
        name: "No License",
        value: "",
      },
    ],
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
