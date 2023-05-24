// Create shape class and assign color
class Shape {
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
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}


class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}
//export file
module.exports = { Triangle, Circle, Square };
