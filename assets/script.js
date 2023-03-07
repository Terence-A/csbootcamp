// // ************** String Methods ********************
// // ** some ask for arguments and some methods do not ** 

// let userName ="       Jimmy   ";
// console.log(userName);

// console.log(userName.trim().toUpperCase()); // You can string together multiple string methods

// let firstName ="  Terence     ";
// console.log(firstName);

// let correctFirstName = firstName.trim().toUpperCase();
// console.log(correctFirstName);

// console.log(firstName); // firstName not changed 

// // ******************* String Methods with Arguments *********************

// let tvShow = "cat dog";
// console.log(tvShow.indexOf("dog"));
// console.log(tvShow.indexOf("cat"));

// let msg = "haha that is so funny!";
// console.log(msg);

// console.log(msg.slice(5));
// console.log(msg.slice(3,9));
// console.log(msg.slice(10,12));
// console.log(msg.slice(-6)); // slices off of the end!! does not affect original string

// let annoyingLaugh = "teehee so funny! teehee!";
// console.log(annoyingLaugh);
// console.log(annoyingLaugh.replace("teehee", "haha")); // Only replaces first instance
// console.log(annoyingLaugh.replaceAll("teehee", "haha")); // Replaces all instances

// console.log("lol ".repeat(5));

// const word = "skateboard";
// let facialHair = word.slice(5).replace("o", "e");

// console.log(word);
// console.log(facialHair);

// // ********************* string template literals *************************

// let product = "Artichoke";
// let price = 3.99;
// price = 2.25;
// let qty = 5;

// let reciept = `You bought ${qty} ${product.toUpperCase()}'s. Which cost $${price * qty} dollars! Thank you for shopping`;
// console.log(reciept);

// console.log(`hello ${1+2+9}`);

// // ******************** Math Objects ******************************

// console.log(Math.floor(29.88)); // chops off decimal (does not round)
// console.log(Math.ceil(34.01)); // rounds up

// console.log(Math.floor(Math.random() *10) +1); // random number between 1 and 10

// console.log(Math.floor(Math.random() *3 ) +20); // random number between 20 and 22

// const die1 = Math.floor(Math.random() * 6) +1; // random number between 1 and 6

// console.log(die1);

// ****************************** if statements ************************************

