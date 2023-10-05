'use strict'

const azeez = {
    firstname: 'Azeez',
    lastname: 'Yahaya',
    birthyear: 1745,
    job: 'programmer',
    wife: 'Ajoke',
    friends: ['Mr. Kazeem', 'Olalere', 'Jamiu',],
    hasDriversLicense: true,
    // calcAge: function () {
    //     console.log(this)
    //     return 2037 - this.birthyear
    // }
    calcAge: function () {
        this.age = 2037 - this.birthyear
        return this.age
    },
    getSummary: function () {
        let aNo = (this.hasDriversLicense) ? a : no
        let summary = `${this.firstname} is a ${this.age}-year old ${job}, and he has ${aNo} drivers's license`
        return summary
    }
}

console.log(azeez.calcAge())
console.log(azeez.getSummary())

