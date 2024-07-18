const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'delta_app'
});

//inserting new data
// let qry = "insert into user values (?, ?, ?, ?)";  for single row data input
let qry = "insert into user values ?";  // for multi-rows data input

let user = [ 
    ["1234","123_abcd","abcde@gmail.com","abcd"], ["1234a","1234_abcd","abced@gmail.com","abcd"]
];
try{
    connection.query(qry, [user], (err,res)=>{
        if(err) throw err;
        console.log(res);
    });
}
catch(e){
    console.log(e);
}
connection.end();
// let getRandomuser = ()=>{
//     return{
//         userId: faker.string.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         password: faker.internet.password()
//     };
// }

