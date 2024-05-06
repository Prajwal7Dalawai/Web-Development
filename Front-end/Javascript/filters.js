const  Pizza=[
    {flavour:'Margretta', price:8},
    {flavour:'Pepperoni', price:10},
    {flavour:'Vegan', price:12},
    {flavour:'Hawaian', price:14},
    {flavour:'Supreme', price:15},
]
const fil=Pizza.filter(pri=>pri.price<11);
const order=fil.map(odr=>odr.flavour);
console.log(order);