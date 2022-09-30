perName = "Ronald"

function toTitCas(string) {
    return string.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' '); //iterating over each word in string and changing first letter case to uppercase
}

console.log("Lowercase = " + perName.toLowerCase())
console.log("Uppercase = " + perName.toUpperCase())
console.log("Title case = "+ toTitCas(perName))
