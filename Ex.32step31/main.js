//Array of current user names.
var current_users = ["Fatima", "Malaika", "Abrash", "Ali", "zia"];
//Array of new User names
var new_users = ["Ali", "Rabia", "Farida", "Ayehsa", "zia"];
//loop through new user to check for user names availbilaity.
new_users.forEach(function (new_one_user) {
    //making a conndition for userName already exists and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
