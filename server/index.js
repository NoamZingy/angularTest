require("dotenv").config()
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const createConnection = require("./connection/index")
const app = express()
const BodyParser = require("body-parser")
app.use(cors())
app.use(express.static("public"))
const accountsModel = require("./model/accountsSchema")
const accountsRouter = require('./routes/accounts')
app.use(BodyParser.json())

createConnection();

app.use("/accounts", accountsRouter)

app.post("/addTask", async (req, res, next) => {
    console.log(req.body)
    const {account_number , type, amount, interest, payment, } = req.body
    try {
        const result = await accountsModel.insertMany([{account_number : account_number , type:type, amount:amount, interest:interest, payment: payment}])
    
            return res.json("add task success")

    } catch (error) {
        console.log(error)
        return res.status(400).send("something went wrong...")

    }
})






app.listen(5000)