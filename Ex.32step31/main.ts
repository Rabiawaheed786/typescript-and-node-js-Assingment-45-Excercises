//Array of current user names.
let current_users = ["Fatima","Malaika","Abrash","Ali","zia"];
//Array of new User names
let new_users  = ["Ali","Rabia","Farida","Ayehsa","zia"];

//loop through new user to check for user names availbilaity.

new_users.forEach(new_one_user => {
    //making a conndition for userName already exists and save in our_condition variable
    let our_condition =current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
  if(our_condition) {

   console.log(`sorry ${new_one_user} is already taken!`)

    }else{
        console.log(`This username ${new_one_user} is available`);
        
    }
})



