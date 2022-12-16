class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let peri=0;
        for (let i = 0; i < this.countSides; i++){
            peri = peri + this.sides[i]
        }
        return peri;
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides > 3 || this.countSides < 3) {
            return false;
        }
        else if (this.sides[1] + this.sides[2] > this.sides[0] &&
            this.sides[1] + this.sides[0] > this.sides[2] &&
            this.sides[0] + this.sides[2] > this.sides[1]
        ) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides > 4 || this.countSides < 4) {
            return false;
        }
        else if (this.sides[1] === this.sides[2]
            && this.sides[2] === this.sides[3] &&
            this.sides[3] === this.sides[0]) {
            return true;
        }
        else {
            return false;
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] * this.sides[0]
        }

    }
}