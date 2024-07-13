//creating a Array
let userNames =["Fatima","Ahtisham","Rabia","Admin","Malaika"];

//ForEach is method use save in Array value one by one .
//using ForEach(method) loop on Aarray.

userNames.forEach(oneUser =>{
if(oneUser === "Admin"){
console.log(`Hello ${oneUser}would you like to see a status report?`)
}else{
    console.log(`Hello ${oneUser},thank you for loging in again`);
}

})
   
