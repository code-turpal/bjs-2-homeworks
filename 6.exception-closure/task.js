function parseCount(number) {
	let result = parseFloat(number);
	if (!result) {
		throw new Error('Невалидное значение');
	}
	return result;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return (error);
	}
}

class Triangle {
	constructor(firstSide, secondSide, thirdSide) {
		if (firstSide > (secondSide + thirdSide) || secondSide > (firstSide + thirdSide) || thirdSide > (firstSide + secondSide)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.thirdSide = thirdSide;
	}

	get perimeter() {
		return this.firstSide + this.secondSide + this.thirdSide;
	}
	get area() {
		let p = this.perimeter / 2;
		return +Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)).toFixed(3);
	}
}

function getTriangle(firstSide, secondSide, thirdSide) {
	try {
		return new Triangle(firstSide, secondSide, thirdSide);
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}