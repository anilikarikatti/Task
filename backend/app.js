const express = require("express");

const app = express();

let cors = require('cors')
 
app.use(cors())
 

require ('dotenv').config()

const routers = require("./routes")

app.use(express.urlencoded({extended:true}));

app.use(express.json())


app.use("/user",routers);
app.listen(process.env.PORT, ()=>{
    console.log(`server startted at port ${process.env.PORT}`);
})

