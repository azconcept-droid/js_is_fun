#!/usr/bin/node
/**
 * This script print the addtion of 2 integers
 */

const inputArgs = process.argv


const firstInteger = parseInt(inputArgs[2])
const secondInteger = parseInt(inputArgs[3])

function add(a, b) {
	let c = a + b;

	console.log(c)
}

add(firstInteger, secondInteger)
