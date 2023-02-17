const express = require('express');
const routes = require('./Routes/routes');
const app = express();
const cors = require('cors')

app.use(
    express.urlencoded({extended:true})
)
app.use(express.json())
app.use(routes);

app.use((re,res, next) =>{
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", "GET, PUT, DELETE, PATCH, POST");
    res.header("Acess-Control-Allow-Headrs", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})

module.exports = app