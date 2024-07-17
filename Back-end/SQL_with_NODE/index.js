const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'delta_app'
});

let qry = "SELECT * FROM temp";
try{
    connection.query(qry, (err,res)=>{
        if(err) throw err;
        console.log(res);
    });
}
catch(e){
    console.log(e);
}
connection.end();
let getRandomuser = ()=>{
    return{
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}

