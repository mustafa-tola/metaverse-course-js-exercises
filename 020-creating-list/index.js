//Name:- Mustufa
//Date:- 09/10/2022
//Converting the string to array

function createList(string) {
    list = []
    string = string.split(",")
    for (let str in string) {
        list.push(string[str])
    }
    return list;
}
console.log(createList("Thatta,Sargodha,Swat"))