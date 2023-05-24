const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const Logo = require("./logo");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        // {
        //   name: "text",
        //   type: "input",
        //   message:
        //     "Enter text for the logo. (Must not be more than 3 characters.)",
        //   validate: (text) =>
        //     text.length <= 3 ||
        //     "The message must not contain more than 3 characters",
        // },
        // {
        //   name: "textColor",
        //   type: "input",
        //   message: "Enter a text color",
        // },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ])
    //   .then(({ text, textColor, shapeType, shapeColor }) => {
    //     let shape;
    //     switch (shapeType) {
    //       case "circle":
    //         shape = new Circle();
    //         break;

    //       case "square":
    //         shape = new Square();
    //         break;

    //       default:
    //         shape = new Triangle();
    //         break;
    //     }
    //     shape.setColor(shapeColor);

    .then(({ shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
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
        shape.setColor(shapeColor);



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
