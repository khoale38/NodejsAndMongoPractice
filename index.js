import 'dotenv/config'
import express from 'express';
import  bodyParser from 'body-parser'
import userRoutes from './routes/user.js'
import mongoose from 'mongoose';
const mongoString =process.env.DATABASE_URL


const app =express()

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.log(error);
});

database.once("connected", () => {
    console.log("Database connected");
});

const port =3000

app.use(bodyParser.json())
app.use('/users',userRoutes)
app.get('/',(req,res,next)=>{
    try {
        res.status(200).send('hello from /')
    } catch (error) {
        next(error)
    }
})


//Send info that page is not existed
app.use(function(req, res) {
    res.status(404).send({'status':'404','message':'Page not found'});
});
app.listen(process.env.PORT || port ,()=>{
    console.log(`Server running on: ${port}`)
})
