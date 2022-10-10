users = ["Mustufa","admin","Idrees","Sikander","Iskander"]
for(let user in users) {
    if(users[user] == "admin") {
        console.log("Hello admin! Do you want to see a status report?")
    }
    else {
        console.log("Hello "+users[user]+"! Thank you for logging in again")
    }
}