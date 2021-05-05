const AccountsModel = require ('../model/accountsSchema')

async function getAccounts (){
 
    const result = await AccountsModel.find({}, { __v: false })
    console.log(result)
    return result;


}


module.exports = getAccounts;