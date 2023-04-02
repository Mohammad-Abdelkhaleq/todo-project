let userName = prompt("please enter your name or i will assume it 😎🍔 ", "bobastic burger ");


let userGender = prompt("please enter your gender", "male/female");



if (userGender == "male" || userGender == "female") {
    alert("thank you");
} else {
    alert("invalide, please enter your gender male/female")
    userGender = prompt("please enter your gender", "male/female");
                                                                          // this a for loop that forces the user to choose one of two options
// if (userGender!=="male"&& userGender!=="female"){
//     for(let i=1;userGender !=="male"&& userGender !=="female";i++){
//         userGender=prompt("please enter your gender", "male/female");
//         if(userGender!=="male"&& userGender!=="female"){
//         alert("invalid value");}
//     }
//     alert("thank you!")
// }else{
//     alert("thank you");
// }
}


   let userAge = prompt("enter your age", "above 1~99 ");

   userAge=parseInt(userAge);

if (userAge >= 1 && userAge < 999) {
    alert("thank you ma boi");
} else {
    alert("invalide, value should be between 1~999");

          for(let i=userAge;userAge<1|| isNaN(userAge);i++){
            userAge = prompt("enter your age", "above 1~99 ");
            if(userAge<1|| isNaN(userAge)){
                alert("invalid value");
            }
        }
        alert("thank you!")
    }

let welcome = confirm("do you want to see the welcoming message");
let gender="";
if (welcome==true){
    switch (userGender) {
        case "male":
            gender="mr"
            break;
        case "female":
            gender="ms"
            break;    

        default:
            gender=""
            break;
    }
    alert("Hi"+" "+gender+" "+userName)

}