let name = 'Mustufa'
let nameUpper = "MUSTUFA"
let nameLower = "mustufa"
let num = 59
test = [10,20,30]

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
console.log('Is num >= 59? I predict true')
console.log(num >= 59)
console.log('Is num <= 60? I predict true')
console.log(num <= 60)
console.log('Is 20 in test? I predict true')
console.log(test.includes(20))

//all false conditions
console.log('Is name.ToUpperCase() == name? I predicted false')
console.log(name.toUpperCase() == name)
console.log('Is num === "59"? I predicted false')
console.log(num === '59')
console.log('Is name == "mustufa"? I predicted false')
console.log(name == 'mustufa')
console.log('Is name != "Mustufa"? I predicted false')
console.log(name != 'Mustufa')
console.log('Is num < 59? I predicted false')
console.log(num < 59)
console.log('Is +num != 59? I predicted false')
console.log(+num != 59)
console.log('Is (num <= 59 || num != 59) && num > 58? I predict true')
console.log((num < 59 || num != 59) && num > 58)
console.log('Is 40 in test? I predict true')
console.log(test.includes(40))