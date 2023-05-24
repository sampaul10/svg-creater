const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const Logo = require("./logo");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "Type",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "Color",
          type: "input",
          message: "Enter a shape color",
        },
      ])
      // switch statement to set color 
    .then(({ Type, Color }) => {
        let shape;
        switch (Type) {
          case "circle":
            shape = new Circle();
            break;

          case "square":
            shape = new Square();
            break;

          default:
            shape = new Triangle();
            break;
        }
        // sets shape coloe
        shape.setColor(Color);

    const svg = new Logo();
    svg.setShape(shape);
    return writeFile("logo.svg", svg.render());
      })

    .then(() => {
        console.log("Created new svg file");
    })

    .catch((error) => {
        console.log(error);
    });
  }
}

module.exports = CLI;
