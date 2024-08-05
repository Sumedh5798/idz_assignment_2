const express=require('express');
const path=require('path');
const router=require('./routes/route.js')
const axios=require('axios');
require('dotenv').config();
const app=express();
const PORT=process.env.PORT || 8080;

//middlware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//ejs setting
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//routes
app.use('/api',router);

app.listen(PORT,()=>console.log(`listening to the port http://localhost:${PORT}`));