const make_sandwich = (...args) => {
    console.log('These items will be added to your sandwich')
    for (let arg in args) {
        console.log(args[arg])
    }
}

console.log('Sandwich 1')
make_sandwich('Lettuce')
console.log('Sandwich 2')
make_sandwich('Lettuce','Cucumber')
console.log('Sandwich 3')
make_sandwich('Lettuce','Cucumber','Egg')