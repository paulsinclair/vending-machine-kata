
const coin = require("../app/Coins").validCoinAmounts

function updateTotal(machine){
  machine.totalMoneyInserted = (machine.totalMoneyInserted || 0) + machine.insertedCoinAmount;
}

function makeChange(machine){
  var item = machine.item
  var counter = {}
  counter.change = []
  counter.changeToGive = machine.totalMoneyInserted - item.price
  counter.float = machine.float || []

  dispenseChangeByDenomination(counter,"Quarter")
  dispenseChangeByDenomination(counter,"Dime")
  dispenseChangeByDenomination(counter,"Nickel")

  machine.float = counter.float

  return counter.change;
}

function dispenseChangeByDenomination(counter, denomination) {
  while (counter.changeToGive >= coin[denomination]) {
    addCoinToChange(counter, denomination)
    removeCoinFromFloat(counter, denomination)
  }
}
  function addCoinToChange(counter, denomination) {
    counter.change.push(denomination)
    counter.changeToGive -=  coin[denomination]
  }

  function removeCoinFromFloat(counter, denomination) {
    const index = counter.float.lastIndexOf(denomination)
    counter.float.splice(index,1)
  }

function isFloatLow(machine){
  var nickels = machine.float.filter((floatCoin)=>{return floatCoin === "Nickel" }).length;
  var dimes = machine.float.filter((floatCoin)=>{return floatCoin === "Dime" }).length;
  var quarters = machine.float.filter((floatCoin)=>{return floatCoin === "Quarter" }).length;
  return nickels === 0 || dimes < 2 || quarters === 0
}


module.exports = {updateTotal: updateTotal, makeChange: makeChange, isFloatLow: isFloatLow}