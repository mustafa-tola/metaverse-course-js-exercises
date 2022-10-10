let name = 'Mustufa'
let nameUpper = "MUSTUFA"
let nameLower = "mustufa"
let num = 59

//all true conditions
console.log('Is name == Mustufa? I predict true')
console.log(name == 'Mustufa')
console.log('Is name === Mustufa? I predict true')
console.log(name === 'Mustufa')
console.log('Is num == "59"? I predict true')
console.log(num == '59')
console.log('Is nameUpper.toLowerCase() == nameLower? I predict true')
console.log(name.toLowerCase() == nameLower)
console.log('Is num > 55? I predict true')
console.log(num > 55)

//all false conditions
console.log('Is name.ToUpperCase() == name? I predicted false')
console.log(name.toUpperCase() == name)
console.log('Is num === "59"? I predicted false')
console.log(num === '59')
console.log('Is name == "mustufa"? I predicted false')
console.log(name == 'mustufa')
console.log('Is num < 59? I predicted false')
console.log(num < 59)
console.log('Is +num != 59? I predicted false')
console.log(+num != 59)