const express=require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB=require("./database/db")
connectDB();

app.get('/',(req, res) => {
    res.json({message:'This is my portfolio website'})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})