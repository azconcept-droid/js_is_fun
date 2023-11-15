#!/usr/bin/node
/**
 * This script print the first argument
 * if it can be converted to integer
 */

const argv = process.argv

let argvInt = parseInt(argv[2])

if (argvInt)
	console.log(`My number: ${argvInt}`)
else
	console.log(`Not a number`)
