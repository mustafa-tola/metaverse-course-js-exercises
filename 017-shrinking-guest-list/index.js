guests = ["Arbab","Shahzain","Faizan"]
guests[1] = "Shahzaib"
guests.unshift("Hamza")
guests.splice(4,0,"Haris")
console.log("We now have a table for only two guests")
while(guests.length > 2) {
    console.log(guests.pop()+"can not attend our dinner")
}
guests.map((guest) => console.log("\nI am inviting "+guest+" to dinner"))
guests.pop()
guests.pop()
console.log("Guests: "+guests)