import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import router from './routes/route.js';

const app=express();   //express functionality is stored in app

app.use(bodyParser.json());   // middleware for passing json request to body
dotenv.config();


// to obtain port and url from .env file and stored in 2 variables
const PORT=process.env.PORT || 5000;     // if given port is busy then 5000 port will execute
const MONGOURL=process.env.MONGOURL;


//.......
app.use('/api/user',router);      // link should be localhost:3000/api/user/fetch  --> fetch is in router.js

// connectivity of db using mongoose
mongoose
    .connect(MONGOURL)
    .then(()=>{ console.log("Database connected");       //if connected successfully, then print db connected
    app.listen(PORT,()=>{                                // to connect to port
        console.log(`Server is running on PORT ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error);
});