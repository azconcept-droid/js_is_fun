#!/usr/bin/node
/**
 *
 */

const argv = process.argv;

const x = parseInt(argv[2]);

if (x) {
	for (let i = 0; i < x; i++) {
		console.log('C is fun');
	}
}

if (argv.length === 2)
	console.log('Missing number of occurences')


