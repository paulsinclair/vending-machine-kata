const Items = require("./Items")

function createMachine(){
 var machine = {};
 machine.display = "INSERT COINS"
 machine.coinReturn = []
 machine.float = []
 machine.acceptedCoins = []
 machine.totalMoneyInserted = 0
 machine.dispenser = Items.empty
 return machine
}


module.exports = {createMachine: createMachine}