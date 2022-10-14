magicians = ['David Copperfield','Doug Henning','Siegfried and Roy','Lance Burton','Ricky Jay']
const make_great = (magicians) => {
    for (let magician in magicians) {
        magicians[magician] = "Great " + magicians[magician]
    }
    return magicians
}
const show_magicians = (magicians) => {
    for (let magician in magicians) {
        console.log(magicians[magician])
    }
}
magicians_copy = make_great([...magicians])
console.log("Copy array")
show_magicians(magicians_copy)
console.log("Original array")
show_magicians(magicians)