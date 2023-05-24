// Create shape class and assign color
class Shape {
  // using this method to call out object
  constructor() {
    this.color = "";
  }
  //set color method
  setColor(color) {
    this.color = color;
  }
}
//create classes for each shape
class Triangle extends Shape {
  render() {
    return `<polygon points="300, 36 488, 364 112, 364" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}


class Square extends Shape {
  render() {
    return `<rect x="135" y="60" width="160" height="160" fill="${this.color}" />`;
  }
}
//export file
module.exports = { Triangle, Circle, Square };
