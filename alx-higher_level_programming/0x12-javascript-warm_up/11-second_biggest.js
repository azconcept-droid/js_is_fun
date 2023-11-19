#!/usr/bin/node
/**
 * This script print the 2nd biggest from an input argument 
 */

const numList = process.argv

if (numList.length === 2 || numList.length === 3) {
	console.log(0)
} else {
	// Slice out the 1st 2 elements from the input args
	let argNumbers = numList.slice(2)
	
	// Sort the argument numbers in descending order
	let sortedArgs = argNumbers.sort((a, b) => b - a)

	// Print the 2nd biggest
	console.log(sortedArgs[1])
}
