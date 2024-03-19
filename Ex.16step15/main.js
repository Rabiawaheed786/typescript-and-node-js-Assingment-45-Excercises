// creating a guestlist Aarry
var guestlist = ["Fatima", "Waheed", "Rabia", "Ahtisham"];
//making varible for those guest who can,t come for dinner
var dontCome = guestlist[0];
//print the Name og guest who can,t come for dinner
console.log(dontCome, "nai ahh sakti ha");
//Add or removes values from Guest List Aarry
guestlist.splice(0, 1, "tasleem");
//message print for bigger dinner table annoced
console.log("Good News !  we have found a Bigger Table for Dinner");
//Adding a new  value starting index of Aarry (index means 0.1 2 3 farast)
guestlist.unshift("Ali");
//Adding a new value at ending index of Aarry
guestlist.push("zia");
// Get a middle Index of our guest list Aarry
var middleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middle Index of Aarry
guestlist.splice(middleIndex, 0, "Bilal");
//print message of updated List
console.log("updated List of our Guests");
//sending a invitation message to our guests one by one with thier Names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",whould you like to dinner with me")); });
