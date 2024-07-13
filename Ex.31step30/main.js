var userNames = ["Fatima", "Ahtisham", "Admin", "Malaika"];
userNames = [];
//this condition not apply because Array is full
//If the statement for checking length of our Array
if (userNames.length === 0) {
    console.log("you Array in Empty We need find some users!");
}
else {
    //ForEach is method use save in Array value one by one .
    //using ForEach(method) loop on Aarray.  
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, "would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",thank you for loging in again"));
        }
    });
}
