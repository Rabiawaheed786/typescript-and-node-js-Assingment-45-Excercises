//creating a Array
var userNames = ["Fatima", "Ahtisham", "Rabia", "Admin", "Malaika"];
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
