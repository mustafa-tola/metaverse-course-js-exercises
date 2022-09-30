guests = ["Arbab","Shahzain","Faizan"]
guests[1] = "Shahzaib"
guests.map((guest) => console.log("\nI am inviting "+guest+" to dinner"))
console.log("We have now a bigger dinner table")
guests.unshift("Hamza")
guests.splice(4,0,"Haris")
guests.map((guest) => console.log("\nI am inviting "+guest+" to dinner"))
