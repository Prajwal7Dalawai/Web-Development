const express = require('express')
const app = express()
const port = 3000
//Express automatically requires EJS, Hence no need to require EJS seperately.
app.set("view engine","ejs");

app.listen(port, (re) => {
    console.log(`Example app listening on port ${port}!`);
    });