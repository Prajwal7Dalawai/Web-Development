console.log("Forward:");
fruits=["apple","orange","banana","Cheeku","Strawberry"];
for(let i=0;i<fruits.length;i++)
console.log(i,": ",fruits[i]);
console.log("Backward:")
for(let i=fruits.length-1;i>=0;i--)
console.log(i,": ",fruits[i]);

//Nested loop in arrays
let heros=[["ironman","captain-america","Thor"],["Superman","Batman","Flash"]];
for(let i=0; i<heros.length; i++)
{
    for(let j=0; j<heros[i].length; j++)
    console.log(i,",",j,": ",heros[i][j]); //to write expression in console.log, use console.log(`j=${j},${heros[i][j]}`)
}

//for of loops

let cars=["Lambhorgini","Bugati","Ferrari","Mecedes","Audi","BMW"];
console.log("Cars:")
for(car of cars)   // in for of loop, the iterating variable access each elements in an array and used in performing required operations
console.log(car);

//Nested for of loop
console.log("Heros:")
for(list of heros)
{
    for(hero of list)
    console.log(hero)
}
