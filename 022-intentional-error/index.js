function createList(string) {
    obj = {}
    string = string.split(",")
    for (let ind in string) {
        // console.log(string[3]) this line gives undefined on console as index does not exist
        str = string[ind].split(":")
        obj[str[0]] = str[1]
        console.log(obj)
    }
    return obj;
}
console.log(createList("Thatta:Sindh,Sargodha:Punjab,Swat:Khyber Pakthunkhuwa"))