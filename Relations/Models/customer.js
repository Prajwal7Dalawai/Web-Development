const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then(()=>{console.log("Connection Successfull");}).catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}
const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
    {
        type: Schema.Types.ObjectId,
        ref: "Order",
    }
]
});
const Order = mongoose.model("Order",orderSchema);

// const addOrders = async ()=>{
//    let result =  await Order.insertMany([{item:"Bat", price:2500},
//         {item:"Ball", price:900},
//         {item:"Gloves",price:1200},
//         {item:"Pads",price:5000},
//     ]);
// }

// addOrders();

const Customer = mongoose.model("Customers",customerSchema);

const addCustomers = async ()=>{
    let cust1 = new Customer({
        name: "Prajwal Dalawai"
    });
    let order1 = await Order.findOne({item:"Bat"});
    let order2 = await Order.findOne({item:"Ball"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let res = await cust1.save();
    console.log(res);
}

addCustomers();