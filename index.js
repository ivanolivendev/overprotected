const express = require('express')
const app = express()
const route = require("../overprotected/src/routes/routes")


app.use(route)
app.use(express.json())


app.listen(3000)