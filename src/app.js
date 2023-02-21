const express = require('express');
const cors = require('cors')
const routes = require('./Routes/routes');
const app = express();


app.use(
    express.urlencoded({extended:true})
)
app.use(express.json())
app.use(routes);


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

module.exports = app