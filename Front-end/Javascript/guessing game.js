const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter the number.");
while(true)
{
    if(guess == "Quit"){
    console.log("User Quit");
    break;
    }
else if(guess == random){
console.log("You wonn!!");
break;
}
else
{
    console.log("Try again!!, The number was ",random);
    if(guess<random)
    guess= prompt("Your guess was small. Try again.");
else if(guess> random)
guess=prompt("Your guess was large. Try again.");
}
}