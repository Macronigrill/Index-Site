require("dotenv").config();
const express = require ("express");
const path = require ("path");

const {HOST, PORT, LOCATION} = process.env
console.log(LOCATION);

const app = express();

app.use(express.static(path.join(__dirname,LOCATION)));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,LOCATION));
})

app.listen(PORT,HOST,()=> console.log(`Server running on ${HOST} at port ${PORT}`));