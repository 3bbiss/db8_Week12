export class Rectangle {
	length: number;
	width: number;
	constructor(_length: number, _width: number) {
		this.length = _length;
		this.width = _width;
	}
	getArea():number {
		return this.length * this.width;
	}
}

//let r1 = new Rectangle(20, 30);
//console.log(r1);
//console.log(r1.getArea());