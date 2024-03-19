// creating a guestlist Aarry
let  guestlist = ["Fatima","Waheed","Rabia","Ahtisham"];

//making varible for those guest who can,t come for dinner
let dontCome = guestlist[0];

//print the Name og guest who can,t come for dinner
console.log(dontCome,"nai ahh sakti ha");

//Add or removes values from Guest List Aarry
guestlist.splice(0,1,"tasleem");

//message print for bigger dinner table annoced
console.log("Good News !  we have found a Bigger Table for Dinner"); 

//Adding a new  value starting index of Aarry (index means 0.1 2 3 farast)
guestlist.unshift("Ali");

//Adding a new value at ending index of Aarry
guestlist.push("zia");


// Get a middle Index of our guest list Aarry
let middleIndex: number = Math.floor(guestlist.length / 2);

//Adding a new guest to middle Index of Aarry
guestlist.splice(middleIndex,0, "Bilal");

//print message of updated List
console.log("updated List of our Guests");

//sending a invitation message to our guests one by one with thier Names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest},whould you like to dinner with me`));

//Inform that only two guests can be invited for dinner
console.log("Unfortunately,the new dinner table Wont  arrive on time so i can only invite two Guests to dinner with me" );

//using while - loop to remove guests from the Aarry Until only two Names remain
while(guestlist.length > 2){
let removeGuest = guestlist.pop();
console.log(`Sorry, ${removeGuest}I cant Invite you to dinner`);
}
//sending the invitation two last on the list
console.log("Invitation to the Last 2 guests");

guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo},you are still Invitated to dinner`));

//removing last two guest  from the list
guestlist.pop();
guestlist.pop();

console.log("Epmty List",guestlist);