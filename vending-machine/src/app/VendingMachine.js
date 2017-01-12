"use strict"

const Display = require("../app/VendingDisplay");
const updateTotal = require("../app/VendingCalculator").updateTotal;
const Coins = require("../app/Coins")
const Items = require("../app/Items")

var totalMoneyInserted = 0;
var coinReturn =[];
var display = Display.INSERTCOINS
var dispenser;
var insertedCoinAmount;
var item;

function insertCoin (coin, machine) {
    if (Coins.isValidCoin(coin)) {
      acceptCoin(this, coin)
      updateTotal(this)
    }
    else {
      Coins.returnCoin(coin,machine.coinReturn)
    }
      Display.updateDisplay(this)
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
  Display.updateDisplay(this)
}

function  pressCola() {
    this.item = Items.cola
    pressButton(this)
  }

function  pressChips() {
    this.item = Items.chips
    pressButton(this)
  }

function  pressCandy() {
    this.item = Items.candy
    pressButton(this)
  }

function  pressButton(machine) {
    Items.dispenseItem(machine)
    Display.updateDisplay(machine)
    machine.change.forEach((coin) =>{Coins.returnCoin(coin,machine.coinReturn)})
}

module.exports = {pressReturnCoins: pressReturnCoins, insertCoin: insertCoin, coinReturn: coinReturn, insertedCoinAmount: insertedCoinAmount,  totalMoneyInserted: totalMoneyInserted, returnedCoins: returnedCoins, display: display, pressCola: pressCola, pressChips: pressChips, dispenser: dispenser, pressCandy:pressCandy}
