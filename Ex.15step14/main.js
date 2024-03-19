var guestlist = ["Fatima", "Waheed", "Ahtisham", "Rabia"];
var dontCome = guestlist[0];
console.log(dontCome, "nai ahh skakti");
guestlist.splice(0, 1, "tasleem");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would u like to dinner with me?")); });
