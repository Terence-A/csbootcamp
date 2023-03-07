// console.log("BEFORE CONDITIONAL");

// let randomNum = Math.floor(Math.random() *10) +1;
// if (randomNum == 1){
//     console.log(`Your number is: ${randomNum}`);
// }else if(randomNum === 2){
//     console.log(`Your number is: ${randomNum}`);
// } else if(randomNum === 3){
//     console.log(`Your number is: ${randomNum}`);
// } else if(randomNum === 4){
//     console.log(`Your number is: ${randomNum}`);
// } else if(randomNum === 5){
//     console.log(`Your number is: ${randomNum}`);
// } else if(randomNum === 6){
//     console.log(`Your number is: ${randomNum}`);
// } else if(randomNum === 7){
//     console.log(`Your number is: ${randomNum}`);
// } else if(randomNum === 8){
//     console.log(`Your number is: ${randomNum}`);
// }else if(randomNum === 9){
//     console.log(`Your number is: ${randomNum}`);
// }else if(randomNum === 10){
//     console.log(`Your number is: ${randomNum}`);
// }

// ************* Flip coin *******************

// let coinFlip = Math.floor(Math.random() *2) +1;
// if (coinFlip === 1){
//     console.log("Heads");
// }else{
//     console.log("Tails");
// }
 
// ************** Find even number ****************

// let randomNum = Math.floor(Math.random() *100) +1;

// console.log(`Your number is ${randomNum}`);
// if (randomNum %2 === 0){
//     console.log("Your number is Even");
// } else {
//     console.log("Your number is Odd");
// }

// *************** else if *******************

// const dayOfWeek = "Friday";
// if (dayOfWeek === "Monday"){
//     console.log("I hate Mondays");
// }else if (dayOfWeek === "Saturday"){
//     console.log("I love Saturdays");
// }else if (dayOfWeek === "Friday"){
//     console.log("Fridays are great");
// }

// 0-5 - free 
// 6-10 - child $10
// 11-65 - adult $20
// 65+ senior $15

// let age = Math.floor(Math.random()*100 ) +1;
// console.log(`Your age is: ${age}`);

// if (age <= 5 ){
//     console.log("You are and infant, you get in free");
// }else if (age <= 10){
//     console.log("You are a child, that will be $10 Please");
// }else if (age <=65){
//     console.log("You are and adult, that will be $20 please");
// }else{
//     console.log("You are a Senior, that will be $10 please")
// }

// ********************** Nesting Conditions ***************************

// --------//Password must be 6+ characters
// --------//Password cannot include space
       
// const password = prompt("please enter a new password");

// if (password.length >= 6){
//     if (password.indexOf(" ") === -1){
//         console.log("Valid Password!")
//     }else {
//         console.log("password cannot contain spaces")
//     }
// }else{
//     console.log("Password not long enough, must be at least 6 characters");
// }

// if (password.indexOf(" ") === -1){
//     console.log("good job, no spaces")
// }else {
//     console.log("password cannot contain spaces")
// }

// ------------------ && and condition, both sides need to be true

// if (password.length >= 6 && password.indexOf(" ") ===-1){
//     console. log("Valid Password")
// }else {
//     console.log("Invalid password");
// }

//------------------- || either condtion, either side needs to be true

// 0-5 - free 
// 6-10 - child $10
// 11-65 - adult $20
// 65+ senior $15

// let age = Math.floor(Math.random()*100 ) +1;
// console.log(`Your age is: ${age}`);
// let age = 111

// if (age >= 0 && age <= 5 || age >= 65 && age <=110){
//     console.log("You get in free");
// }else if (age >= 6 && age <= 10){
//     console.log("You are a child, that will be $10 Please");
// }else if (age >= 11 && age <= 65){
//     console.log("You are and adult, that will be $20 please");
// }else {
//     console.log("Invalid age");
// }

//------------------- ! not condition, changes value of boolean 

// const firstName = prompt("enter your first name");
// if (!firstName){
//     firstName = prompt("Try again");
// }

// *********************** Switch Statement *****************************

// const day = parseInt(prompt("Enter a day of the week: "));

// switch (day){
//     case 1: 
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3: 
//         console.log("WEDNESDAY");
//         break;
//     default:
//             console.log("INVALID NUMBER");
// }