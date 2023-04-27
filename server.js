const express=require('express');
const app=express();
const mongoose=require('mongoose');

require('dotenv').config();
const helmet=require('helmet');
const cors = require('cors');
const {readdirSync}=require('fs');
const morgan = require('morgan');
const Database=process.env.DATABASE;
const port=process.env.PORT||4000;


//middleware

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());



//db connection

mongoose.set('strictQuery', false);



mongoose
     .connect(Database)
     .then(()=>console.log("db connected"))
     .catch((err)=>{
          console.log(err)
          console.log('db is not connected')
          
     });

     



// routes connection

readdirSync('./routes').map(r=>app.use('/api/v1',require(`./routes/${r}`)));



// server

// const port=process.env.port|| 8000;


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});