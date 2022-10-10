function createList(string) {
    list = []
    string = string.split(",")
    for (let str in string) {
        list.push(string[str])
    }
    return list;
}
console.log(createList("Thatta,Sargodha,Swat"))