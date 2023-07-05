const express = require('express');
const app = express();
const port = 5000;
const userRoutes=require('./routes/routes')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/user',userRoutes);

app.get( '/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})