const { Circle, Triangle, Square } = require("../lib/shapes.js");


describe('Triangle', () => {
    test("should make a gray triangle", () => {
        const testTriangle = `<polygon points="120, 25 250, 170 50, 165" fill="gray">`;
        const triangle = new Triangle();
        triangle.setColor('gray');
        const actualTriangle = triangle.render();
        expect(actualTriangle).toEqual(testTriangle);
    })
});

describe('Square', () => {
    test("should make a blue square", () => {
        const testSquare = `<rect x="85" y="50" width="120" height="120" fill="blue">`;
        const square = new Square();
        square.setColor('blue');
        const actualSquare = square.render();
        expect(actualSquare).toEqual(testSquare);
    })
});

describe('Circle', () => {
    test("should make a red circle", () => {
        const testCircle = `<circle cx="130" cy="100" r="80" fill="red">`;
        const circle = new Circle();
        circle.setColor('red');
        const actualCircle = circle.render();
        expect(actualCircle).toEqual(testCircle);
    })
})