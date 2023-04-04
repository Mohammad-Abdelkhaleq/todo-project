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
// ##################################################################################################################

let q1= "do you love music? yes/no";
let q2= "do love walking alone in the vally of death? yes/no"
let q3= "have you ever jumped from the forth floor? yes/no"
let arr1 = [q1,q2,q3];
let arr2 = [];
// this a normal funtion
function responseArray(array){
    let array2 = [];
    for(let i=0;i<array.length;i++){
        let answer=prompt(array[i]);
        if(answer==="yes"||answer==="no"){
            array2.push(answer);
        }else{
            array2.push("invalid");
        }
    }
    return array2;
}
 
let confirmation = confirm("we would like to ask you a couple more questions would you like to answer it ")
if (confirmation===true){
    arr2=responseArray(arr1);
}else{
    alert("thank you!");
}
console.log(arr2);

