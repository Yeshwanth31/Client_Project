const express = require('express');
const app = express();
require('dotenv').config({path:'./.env'})
const port = process.env.PORT || 5000;
const postRoutes=require('./routes/post')
const userRoutes=require('./routes/user')
const mongo=require('mongoose')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongo.connect("mongodb+srv://Yeshwanth:9492271419@user-interface.7mk7ovo.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log(err)
})

app.use('/user',userRoutes);
app.use('/post',postRoutes);

app.get( '/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)  
})