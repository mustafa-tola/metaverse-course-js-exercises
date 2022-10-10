//Name:- Mustufa
//Date:- 09/10/2022
//Converting the string to object

function createList(string) {
    obj = {}
    string = string.split(",")
    for (let ind in string) {
        str = string[ind].split(":")
        obj[str[0]] = str[1]
    }
    return obj;
}
console.log(createList("Thatta:Sindh,Sargodha:Punjab,Swat:Khyber Pakthunkhuwa"))