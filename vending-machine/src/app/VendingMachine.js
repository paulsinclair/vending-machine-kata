
const Display = require("../app/VendingDisplay");
const updateTotal = require("../app/VendingCalculator").updateTotal;
const Coins = require("../app/Coins")
const Items = require("../app/Items")

var totalMoneyInserted = 0;
var coinReturn =[];
var display = Display.INSERTCOINS
var dispenser;
var insertedCoinAmount;
//var item;

function insertCoin (coin, machine) {
    if (Coins.isValidCoin(coin)) {
      acceptCoin(machine, coin)
      updateTotal(machine)
    }
    else {
      Coins.returnCoin(coin,machine.coinReturn)
    }
      Display.updateDisplay(machine)
  }

function  returnedCoins() {
    return this.coinReturn;
  }

function  acceptCoin(machine, coin) {
  machine.acceptedCoins = machine.acceptedCoins || []
  machine.acceptedCoins.push(coin)
  machine.insertedCoinAmount = Coins.validCoinAmounts[coin];
}

function pressReturnCoins(machine){
  machine.acceptedCoins.forEach((coin) =>{Coins.returnCoin(coin,machine.coinReturn)})
  machine.totalMoneyInserted = 0
  Display.updateDisplay(machine)
}

function  pressCola(machine) {
    machine.item = Items.cola
    pressButton(machine)
  }

function  pressChips(machine) {
    machine.item = Items.chips
    pressButton(machine)
  }

function  pressCandy(machine) {
    machine.item = Items.candy
    pressButton(machine)
  }

function  pressButton(machine) {
    machine.change = []
    Items.dispenseItem(machine)
    machine.change.forEach((coin) =>{Coins.returnCoin(coin,machine.coinReturn)})
    machine.change = []
}

module.exports = {pressButton: pressButton, pressReturnCoins: pressReturnCoins, insertCoin: insertCoin, coinReturn: coinReturn, insertedCoinAmount: insertedCoinAmount,  totalMoneyInserted: totalMoneyInserted, returnedCoins: returnedCoins, display: display, pressCola: pressCola, pressChips: pressChips, dispenser: dispenser, pressCandy:pressCandy}
