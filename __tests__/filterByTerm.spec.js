import {describe} from "@jest/globals"; //ToDo!

export function sum(a, b) {
	return a + b;
}

describe("Filter function", () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
	test('adds 2 + 2 to equal 4', () => {
		expect(sum(2, 2)).toBe(4);
	});
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(4, 2)).toBe(6);
	});
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(10, 2)).toBe(12);
	});
})
;
