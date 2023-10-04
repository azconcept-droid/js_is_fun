'use strict'

const azeez = {
    firstname: 'Azeez',
    lastname: 'Yahaya',
    age: 2040 - 1991,
    job: 'programmer',
    wife: 'Ajoke',
    friends: ['Mr. Kazeem', 'Olalere', 'Jamiu',],
}

console.log(azeez)

console.log(azeez.wife)
console.log(azeez['job'])

const nameKey = 'name'
console.log(azeez['first' + nameKey], azeez['last' + nameKey])

const interestedIn = prompt('What do you want to know about Azeez: Choose between \
firstName, lastNmae, age, job, wifeName, and friends')

if (azeez[interestedIn]) {
    console.log(azeez[interestedIn])
} else {
     console.log('Enter a valid input')
}