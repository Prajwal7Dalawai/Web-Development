let fav="SSE"
let guess= prompt("Guess the favourite movie");
while(guess!=fav && guess!="quit")
{
    guess=prompt("Wrong guess, please try again!!");
} 
if(guess == fav){
console.log("Congrats");
}
else{
    console.log("You quit");    
}
