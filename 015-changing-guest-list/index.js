guests = ["Arbab","Shahzain","Faizan"]
guests.map((guest) => console.log("I am inviting "+guest+" to dinner"))
console.log("\nShahzain can not come to dinner")
guests[1] = "Shahzaib"
guests.map((guest) => console.log("\nI am inviting "+guest+" to dinner"))