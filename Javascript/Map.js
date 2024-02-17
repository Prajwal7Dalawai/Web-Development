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
