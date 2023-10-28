class Person {
    //name
    constructor(name) {
        this.name = name
    }

    static genericHello() {
        return 'Hello'
    }

    hello() {
        return `Hello, I am ${this.name}.`
    }
}

class Programmer extends Person {
    constructor(name) {
        super(name)
    }
}

const yalect = new Programmer('yalect')

console.log(yalect.name)

console.log(yalect.hello())
console.log(Programmer.genericHello())