#!/usr/bin/node
/**
 * This script prints "C is fun" x times
 */

const argv = process.argv;

const x = parseInt(argv[2]);

if (x) {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}

if (argv.length === 2) { console.log('Missing number of occurences'); }
