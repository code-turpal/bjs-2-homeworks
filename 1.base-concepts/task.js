"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let d = b ** 2 - 4 * a * c;

	if (d === 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(countMonths)) {
		let percentMonth = percent / 100 / 12;
		let bodyCredit = amount - contribution;
		let feeMonth = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
		let totalAmount = parseFloat((feeMonth * countMonths).toFixed(2));
		return totalAmount;
	}

}