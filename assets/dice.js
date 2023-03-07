let rollDie = function(){
    return roll =  Math.floor(Math.random() *6 ) +1;
}
let totalPoints = 100;
console.log(`Points: ${totalPoints}`);

rollDie();
console.log(`You rolled a: ${roll}`);

if(roll === 5){
    totalPoints += 50;
    console.log("50 points!");
}else if(roll === 1){
    totalPoints += 100;
    console.log("100 Points")
}else{
    console.log("Sorry, no points");
}

console.log(`New score: ${totalPoints}`);