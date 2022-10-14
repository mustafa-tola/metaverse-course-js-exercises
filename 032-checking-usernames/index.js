current_users = ["Mustufa","Muzamil","Idrees","Sikander","Iskander"]
new_users = ["Mustufa","Kamil","Idrees","Saqib","Munawar"]
let same;
for (let new_user in new_users) {
    same = false;
    for (let curr_user in current_users) {
        if (current_users[curr_user].toLowerCase() == new_users[new_user].toLowerCase()) {
            same = true;
            break;
        }
        else {
            continue;
        }
    }
    if (same) {
        console.log(new_users[new_user]+" needs to enter a new username")
    }
    else {
        console.log(new_users[new_user]+" is available")
    }
}