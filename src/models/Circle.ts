import { p5 } from "./../p5";
import Coords from "./Coords";
export default class Circle {
	radius = 0;
	coords: Coords;
	constructor(radius: number, posX: number, posY: number) {
		this.radius = radius;
		this.coords.x = posX;
		this.coords.y = posY;
	}

	draw = () => {
		p5.fill(255, 0, 0);
		p5.ellipse(this.coords.x, this.coords.y, this.radius * 2);
	};

	updatePosition = (x: number, y: number) => {
		this.coords.x = x;
		this.coords.y = y;
	};
}
