let guestlist = ["Fatima","Waheed","Ahtisham","Rabia"];

let dontCome = guestlist[0];

console.log(dontCome,"nai ahh skakti");

guestlist.splice(0,1,"tasleem");

guestlist.forEach(guest => console.log(`salam ${guest},would u like to dinner with me?`));