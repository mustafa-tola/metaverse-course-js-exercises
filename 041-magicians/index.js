magicians = ['David Copperfield','Doug Henning','Siegfried and Roy','Lance Burton','Ricky Jay']
const show_magicians = (magicians) => {
    for (let magician in magicians) {
        console.log(magicians[magician])
    }
}
show_magicians(magicians)