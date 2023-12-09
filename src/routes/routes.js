const express = require('express')
const route = express()

route.get("/",(req,res)=>{res.send("Olá aralhos")})




module.exports = route