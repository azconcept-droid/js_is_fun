#!/usr/bin/node
/**
 * This script compute and prints the factorial of a number.
 */

const inputArgs = process.argv


const number = parseInt(inputArgs[2])

let result = 1

function factorial(num) {
	if (!num) {
		return result
	} else {
		result = result * num
		return factorial(num - 1)
	}
}

console.log(factorial(number))

