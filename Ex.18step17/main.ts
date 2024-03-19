//Mahing a Aarry of countries and print its original order
let countriesTovist: string [] = ["China","Denmark","Brazil","Argitina"];


console.log("original order:",countriesTovist);

//print the Aarry of alphabitical order without midifying the Actual Aarry List (.Dot)show alphatical order list
console.log("Alphabitical order:",[...countriesTovist].sort());
 
//show that the  Aarry is still in its original order
console.log("still original order:",countriesTovist);

//print the Aarry  in Reverse order without modifying the Actual list
console.log("Reverse order:",[...countriesTovist].reverse());

//show that the  Aarry is still in its original order
console.log("still original order:",countriesTovist);

//we have change the original Aarry order Now
console.log("original Aarry Reverse:",countriesTovist.reverse());

//print the Aarry to show that its back to it,s original order
console.log("Back to original order:",countriesTovist.reverse());

//print the Aarry to show that its order has been changed in  Alphabitical order now
console.log("sorted in Alphabitical order:",countriesTovist.sort());



//we have changed again the original Aarry order Now in reverse order again
console.log("original Aarry Reverse again :",countriesTovist.reverse());
