'use strict'

const azeez = {
    firstname: 'Azeez',
    lastname: 'Yahaya',
    birthyear: 1745,
    job: 'programmer',
    wife: 'Ajoke',
    friends: ['Mr. Kazeem', 'Olalere', 'Jamiu',],
    // calcAge: function () {
    //     console.log(this)
    //     return 2037 - this.birthyear
    // }
    calcAge: function () {
        this.age = 2037 - this.birthyear
        return this.age
    }
}

console.log(azeez.calcAge())
console.log(azeez.calcAge())
console.log(azeez.calcAge())
console.log(azeez.calcAge())

