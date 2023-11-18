#!/usr/bin/node
/**
 * This script print square
 */

const inputArgs = process.argv

const squareSize = parseInt(inputArgs[2])



if (squareSize) {
	for (let row = 0; row < squareSize; row++) {
		let printX = ""
		for(let col = 0; col < squareSize; col++) {
			printX = printX + "X"
		}
		console.log(printX)
	}
} else {
	console.log("Missing size")
}

