#!/usr/bin/node
/**
 * This script prints the first argument passed to it
 * if no arguments print “No argument”
 */

const argsArray = process.argv;

let count = 0;

while (argsArray[count]) { count++; }

if (count === 2) { console.log('No argument'); } else { console.log(argsArray[2]); }
