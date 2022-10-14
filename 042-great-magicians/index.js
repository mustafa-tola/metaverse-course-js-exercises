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
make_great(magicians)
show_magicians(magicians)