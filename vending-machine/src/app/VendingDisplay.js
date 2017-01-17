
const DEFAULT = "INSERT COINS"
const EXACTCHANGE = "EXACT CHANGE ONLY"
const isFloatLow = require("../app/VendingCalculator").isFloatLow

function updateDisplay(machine){
  machine.display = convertToCurrency(machine.totalMoneyInserted)
  machine.display = machine.display.replace("$0.00", DEFAULT)
  if (isFloatLow(machine)) machine.display = machine.display.replace(DEFAULT, EXACTCHANGE)
}

function updateDisplayWithPrice(machine) {
  var item = machine.item;
  machine.display = "PRICE " + convertToCurrency(item.price);
}

function convertToCurrency(amount){
  return amount.toLocaleString('us-US',{ style: 'currency', currency: 'USD' });
}

function updateDisplayWithMessage(machine, message){
  machine.display = message
}

module.exports = {convertToCurrency: convertToCurrency, updateDisplay: updateDisplay, updateDisplayWithPrice: updateDisplayWithPrice, updateDisplayWithMessage: updateDisplayWithMessage, INSERTCOINS: DEFAULT}