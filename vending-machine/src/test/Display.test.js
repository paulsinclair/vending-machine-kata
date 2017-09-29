"use strict"

const expect = require("Chai").expect;

const Display = require("../app/VendingDisplay")
var machine = require("../app/VendingMachine")

describe('Display', () => {
  var item
  beforeEach(()=>{
  machine.display = "XXXXX"
  machine.float = ["Nickel","Dime","Dime","Quarter"]
})
  it('UpdateDisplay Updates to EXACT CHANGE ONLY when amount is zero and the float is low',()=>{
    machine.display = "XXXXX"
    machine.float = []
    machine.totalMoneyInserted = 0;
    Display.updateDisplay(machine);
    expect(machine.display).to.eql("EXACT CHANGE ONLY")
  })
  it('UpdateDisplay Updates to INSERT COINS when amount is zero',()=>{
    machine.display = "XXXXX"
    machine.totalMoneyInserted = 0;
    Display.updateDisplay(machine);
    expect(machine.display).to.eql("INSERT COINS")
  })
  it('UpdateDisplay Shows the correct amount when amount is non zero',()=>{
    machine.display = "XXXXX"
    machine.totalMoneyInserted = 1;
    Display.updateDisplay(machine);
    expect(machine.display).to.eql("$1.00")
  })
  it('UpdateDisplay Shows the correct amount when amount is non zero and float is empty',()=>{
    machine.float = []
    machine.totalMoneyInserted = 1;
    Display.updateDisplay(machine);
    expect(machine.display).to.eql("$1.00")
  })
it('updateDisplayWithPrice Shows the Price of the item selected when there is not enough',()=>{
   item = {};
   item.name = "Item";
   item.price = 1;
   machine.item = item;
   Display.updateDisplayWithPrice(machine)
   expect(machine.display).to.eql("PRICE $1.00")
})
it('updateDisplayWithMessage Shows the Messgae on the display',()=>{
  Display.updateDisplayWithMessage(machine, 'message')
   expect(machine.display).to.eql("message")
})
})
;
