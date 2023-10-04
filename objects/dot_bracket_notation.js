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

// const interestedIn = prompt('What do you want to know about Azeez: Choose between \
// firstName, lastNmae, age, job, wifeName, and friends')

// if (azeez[interestedIn]) {
//     console.log(azeez[interestedIn])
// } else {
//      console.log('Enter a valid input')
// }

azeez.location = 'Nigeria'
azeez['twitter'] = '@yalecttech'

console.log(azeez)

// coding challenge
let number_of_friends = azeez.friends.length, person = azeez.firstname
let best_friend = azeez.friends[0]
let message = `${person} has ${number_of_friends} friends, and his best friend is called ${best_friend}`
console.log(message)