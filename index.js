const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { response } = require('express');
const port  = 4000; 
const app = express();
// middle ware
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// cors module code
app.use(function(req,res,next){

    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
})
// db connection
const dbconfig = require('./config/DataBase.config');
mongoose.connect(dbconfig.url,{useNewUrlParser:true}).then(()=>{
    console.log('Successfully connected to the database');
}).catch((err)=> {
console.log('Could not connect to the database',err);
process.exit();
})

app.get('/home',function(req,res){
    console.log('inside home api ');
    res.send('firstString');
    
});


require('./app/routes/Product.routes')(app);
app.listen(port,()=>{
    console.log('Application running on 4000');
});

/* 
json 
list - array json
middle ware in express
then and catch
try , catch
await
sync and async


*/