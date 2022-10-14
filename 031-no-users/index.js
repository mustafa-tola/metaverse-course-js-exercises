//Does not execute if
users = ["Mustufa","admin","Idrees","Sikander","Iskander"]
if (users.length == 0) {
    console.log('\nWe need to find some users')
}
for(let user in users) {
    if(users[user] == "admin") {
        console.log("Hello admin! Do you want to see a status report?")
    }
    else {
        console.log("Hello "+users[user]+"! Thank you for logging in again")
    }
}

//executes if
users = []
if (users.length == 0) {
    console.log('\nWe need to find some users')
}
for(let user in users) {
    if(users[user] == "admin") {
        console.log("Hello admin! Do you want to see a status report?")
    }
    else {
        console.log("Hello "+users[user]+"! Thank you for logging in again")
    }
}
