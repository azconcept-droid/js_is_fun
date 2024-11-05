'use strict'
/**
 * Create functions that when called in the example below,
 * will return the corrrect answer, for example
 * seven(plus(five())) // must return 12
 * four(times(nine())) // must return 36
 */

// numbers function
const zero = (fn) => {
    if (fn) {
        return fn(0)
    } else {
        return 0
    }
}

const one = (fn) => {
    let func = fn ? fn(1) : 1;
    
    return func
}

const two = (fn) => {
    let func = fn ? fn(2) : 2;

    return func;
}
const three = (fn) => {
    let func = fn ? fn(3) : 3;

    return func
}

const four = (fn) => {
    let func = fn ? fn(4) : 4;

    return func
}

const five = (fn) => {
    let func = fn ? fn(5) : 5;

    return func;
}

const six = (fn) => {
    let func = fn ? fn(6) : 6;

    return func;
}

const seven = (fn) => {
    let func = fn ? fn(7) : 7

    return func;
}

const eight = (fn) => {
    let func = fn ? fn(8) : 8;

    return func
}

const nine = (fn) => {
    let func = fn ? fn(9) : 9;
    
    return func
}

// maths operations
function plus(x){
    function add(num) {
        return num + x;
    }

    return add;
}

function times(x) {
    function mul(num) {
        return num * x
    }

    return mul
}

function minus(x) {
    function sub(num) {
        return num - x
    }

    return sub
}

function dividedBy(x) {
    function div(num) {
        return num / x;
    }

    return div
}
// testing
console.log(seven(plus(five())))
console.log(four(times(nine())))
console.log(five(minus(seven())))
console.log(nine(dividedBy(three())))
