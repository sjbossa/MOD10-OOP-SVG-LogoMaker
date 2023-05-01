class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('Not implemented');
  }
}

class Circle extends Shape {
  render() {
   return `<circle cx="130" cy="100" r="80" fill="${this.color}">`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="120, 25 250, 170 50, 165" fill="${this.color}">`;
  }
}


class Square extends Shape {
  render() {
    return `<rect x="85" y="50" width="120" height="120" fill="${this.color}">`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square
};