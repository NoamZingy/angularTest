const express = require("express")
const axios = require("axios")
const getAccounts = require("../controller/accounts")
const router = express.Router()


router.get("/", async (req, res, next) => {
    const accounts = await getAccounts();
    res.json(accounts)

})



module.exports = router;