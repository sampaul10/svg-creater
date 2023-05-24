class Logo {
    constructor() {
      this.shapeElement = "";
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}</svg>`;
    }
  
    setShape(shape) {
      this.shapeElement = shape.render();
    }
  }
  
  //export file
  module.exports = Logo;
  