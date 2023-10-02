class Person {
    name
    constructor(age) {
        this.age = age
    }

    static genericHello() {
        return 'Hello am generic'
    }
    hello() {
        return `Hello I am a Person ${this.name}`
    }
}
// Inheritance
class Programmer extends Person {
    hello() {
        return super.hello()  + '. I am also a programmer.'
    }
}


const azeez = new Person(80)
const ajoke = new Programmer()

azeez.name = 'Azeez'
ajoke.name = 'Ajoke'

console.log(ajoke.hello())
console.log(azeez.name)
console.log(azeez.age)
console.log(azeez.hello())
console.log(Person.genericHello())
