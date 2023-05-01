const inquirer = require('inquirer');
const fs = require('fs-extra');

function promptUser() {
  inquirer
    .prompt([
      // Write the user prompt //
      {
        type: "input",
        message:
          "Which characters would you like to display for your logo? (No more than 3 characters!)",
        name: "text",
      },
      // User's color prompt //
      {
        type: "input",
        message:
          "Choose the text color for your logo! (Enter the color OR a hexadecimal number!)",
        name: "textColor",
      },
      // User's shape prompt //
      {
        type: "list",
        message: "What background shape would you like your logo to have?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // User's shape color prompt //
      {
        type: "input",
        message:
          "What would you like your logo's background shape color to be? (Enter the color OR a hexadecimal number!)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {

      if (answers.text.length > 3) {
        console.log("Please enter a value of NO MORE than 3 characters!");
        promptUser();
      } else {
        // Generate SVG file //
        writeToFile("logo.svg", answers);
      }
    });
}

// Import classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");
// Writes the SVG file using the given user answers from the inquirer prompts
function writeToFile(fileName, answers) {
  let svgChoice = "";
  svgChoice =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgChoice += "<g>";
  svgChoice += `${answers.shape}`;

  let shapeType;
  if (answers.shape === "Triangle") {
    shapeType = new Triangle();
    svgChoice += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeType = new Square();
    svgChoice += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeType = new Circle();
    svgChoice += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svgChoice += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  svgChoice += "</g>";
 
  svgChoice += "</svg>";

  fs.writeFile(fileName, svgChoice, (err) => {
    err ? console.log(err) : console.log("Your new logo.svg has been generated!");
  });
}
promptUser();
