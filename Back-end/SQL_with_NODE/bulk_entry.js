const { faker } = require('@faker-js/faker');
const sql = require('mysql2');

const connection = sql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'password'
});

let generaterandom = () => {
    return[
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

data = []
for(let i = 0; i<100; i++)
    data.push(generaterandom());

qry = "insert into user values ?";
try{
connection.query(qry,[data], (err,res)=>{
    if(err) throw err
    console.log(res);
});
}
catch(e){
    console.log(e);
}

connection.end();