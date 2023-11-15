#!/usr/bin/node
/**
 *
 */

const argv = process.argv

let argvInt = parseInt(argv[2])

if (argvInt)
	console.log(`My number: ${argvInt}`)
else
	console.log(`Not a number`)
