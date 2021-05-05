const express = require("express")
const axios = require("axios")
const getAccounts = require("../controller/accounts")
const router = express.Router()


router.get("/", async (req, res, next) => {
    const accounts = await getAccounts();
    res.json(accounts)
 /*    console.log(req.body)
    const {account_number } = req.body
     const result = await accountsModel.find ({account_number : account_number })
     res.json(result) */
})





module.exports = router;