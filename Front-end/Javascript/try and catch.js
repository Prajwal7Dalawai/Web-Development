//Try and Catch helps in testing the part of code, in which me may or may not get an error. If we get the error, then the code written in
//the catch segment will be executed without any interuption. This helps to overcome crashing of any webpage in webserver if there occurs any 
//error in the code.
a="Prajwal"
try{
    console.log(a);
}
catch(error){
    console.log("The error has occured above.");
    console.log("But still these lines are executing.");
    console.log(`The error is ${error}`);
}