const  Pizza=[
    {flavour:'Margretta', price:8},
    {flavour:'Pepperoni', price:10},
    {flavour:'Vegan', price:12},
    {flavour:'Hawaian', price:14},
    {flavour:'Supreme', price:15},
]
const flavour=Pizza.map(pizza=>pizza.flavour);
console.log(flavour);
const num=[1,2,3,4,5,6];
console.log(num.map(nu=>nu*2));

let arr=[1,2,3,4];
let arr1 = arr.map((el)=>{
    return el**2;
});
console.log(arr1);
let Price = Pizza.map((el)=>{
    return el.price + (el.price*(18/100));
});
console.log(Price);