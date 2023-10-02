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

const flavio = new Person('Azeez')

// flavio.name = 'Azeez'


console.log(flavio.name)
console.log(flavio.hello())
console.log(Person.genericHello())