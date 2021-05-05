const mongoose = require("mongoose")

const accountSchema = new mongoose.Schema({
    account_number: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        default: false
    },
    amount: {
        type: Number,
        required: false
    },
    day: {
        type: Date,
        default: new Date()
    },
    interest: {
        type: Number,
        required: false
    },
    payment: {
        type: Number,
        required: false
    },
  
})
const AccountsModel = mongoose.model("accounts", accountSchema)

module.exports = AccountsModel;