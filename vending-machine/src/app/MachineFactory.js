
function createMachine(){
 var machine = {};
 machine.display = "INSERT COINS"
 machine.coinReturn = []
 machine.totalMoneyInserted = 0
 return machine
}


module.exports = {createMachine: createMachine}