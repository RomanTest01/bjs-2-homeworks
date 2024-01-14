"use strict"

function solveEquation(a, b, c) {
	const discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant > 0) {
		const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [x1, x2];
	} else
	if (discriminant === 0) {
		const x = -b / (2 * a);
		return [x];
	} else {
		return [];
	}

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const percentBid = percent / 100;
	const P = percentBid / 12;
	const S = amount - contribution;

	const monthlyPayment = S * (P + P / (Math.pow(1 + P, countMonths) - 1));
	const totalPayment = monthlyPayment * countMonths;

	return +totalPayment.toFixed(2);

}