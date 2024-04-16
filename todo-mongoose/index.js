const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const todorouter = require("./todoRouter/todorouter")
const app = express()

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then( (res)  => {
  console.log("Connected to mongoDB")
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`App running on port ${process.env.SERVER_PORT}`)
  })
}).catch( (err) => {
  console.log("Not connected")
})


app.use("/task", todorouter)

