"use strict"
const expect = require('chai').expect;

const Items = require("../src/app/Items")
const VendingMachine = require("../src/app/VendingMachine");
const updateDisplay = require("../src/app/VendingDisplay").updateDisplay
var machine = {}

 describe('Vending Machine',() => {
   beforeEach(() => {
    machine.totalMoneyInserted = 0;
    machine.display = "INSERT COINS";
    machine.coinReturn = [];
    machine.stock = [Items.cola, Items.chips, Items.candy]
    machine.float = ["Nickel","Dime","Dime","Quarter"]
   })
  describe("when no coins are inserted",()=>{
    it("displays INSERT COINS",()=>{
      expect (machine.display).to.equal("INSERT COINS")
  })
})
   describe("when given a valid coin", () => {
     it("Adds a nickel to the total", () => {
       VendingMachine.insertCoin("Nickel",machine);

     expect (machine.display).to.equal("$0.05")
    })
  it("Adds multiple nickels to the total", () => {
     VendingMachine.insertCoin("Nickel",machine);
     VendingMachine.insertCoin("Nickel",machine);
     VendingMachine.insertCoin("Nickel",machine);
     VendingMachine.insertCoin("Nickel",machine);

     expect (machine.display).to.equal("$0.20")
     })
  it("Adds a dime to the total", () => {
     VendingMachine.insertCoin("Dime",machine);

     expect (machine.display).to.equal("$0.10")
    })
   it("Adds a quarter to the total", () => {
      VendingMachine.insertCoin("Quarter",machine);

      expect (machine.display).to.equal("$0.25")
    })
  })
  describe("when given an inValid coin", () => {
   it("Does not update total",()=>{
   VendingMachine.insertCoin("Penny",machine);
  expect (VendingMachine.display).to.equal("INSERT COINS")
})
it("Puts the coin in the reject tray",()=>{
   machine.coinReturn = ["Yen"];
   VendingMachine.insertCoin("Penny", machine);
   expect(machine.coinReturn).to.include("Penny")
})
it("Puts multiple coins in the reject tray",()=>{
   VendingMachine.insertCoin("Penny", machine);
   VendingMachine.insertCoin("Peso",machine);
   VendingMachine.insertCoin("Yen",machine);
   expect(machine.coinReturn).to.include("Penny")
   expect(machine.coinReturn).to.include("Peso")
   expect(machine.coinReturn).to.include("Yen")
   expect(machine.coinReturn.length).to.equal(3)
})
})
describe("Display ",()=>{
  it("Shows 'INSERT COINS' when the amount is zero",()=>{
    expect(machine.display).to.eql("INSERT COINS")
})
  it("Shows the correct amount when the amount is greater than zero",()=>{
    VendingMachine.insertCoin("Quarter",machine);
    expect(machine.display).to.eql("$0.25")
  })
})
 describe("Dispenser",()=>{
   it("Does not dispense cola when there are no coins inserted",()=>{
     VendingMachine.pressCola(machine);
     updateDisplay(machine)
     expect(machine.dispenser).to.eql("empty");
     expect(machine.display).to.eql("INSERT COINS")
    })
it("Dispense Cola if there is enough money inserted",()=>{
    VendingMachine.insertCoin("Quarter",machine);
    VendingMachine.insertCoin("Quarter",machine);
    VendingMachine.insertCoin("Quarter",machine);
    VendingMachine.insertCoin("Quarter",machine);
    VendingMachine.pressCola(machine);
    updateDisplay(machine);
    expect(machine.dispenser).to.eql("Cola");
   expect(machine.display).to.eql("INSERT COINS")
})
it("Does not dispense Cola if there was less than $1.00 inserted",()=>{
    VendingMachine.insertCoin("Quarter",machine);
    VendingMachine.insertCoin("Quarter",machine);
    VendingMachine.insertCoin("Quarter",machine);
    VendingMachine.pressCola(machine);
    expect(machine.dispenser).to.eql("empty");

})
it("Dispenses Chips when the Chips button is pressed and there is $0.50 inserted",()=>{
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.pressChips(machine);
  expect(machine.dispenser).to.eql("Chips");
  })
it("Dispenses Chips and gives change when the Chips button is pressed and there is more than $0.50 inserted",()=>{
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.pressChips(machine);
  expect(machine.dispenser).to.eql("Chips",machine);
  expect(machine.coinReturn).to.include("Quarter")
  })
it("Dispenses Candy when the Candy button is pressed and there is $0.65 inserted",()=>{
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.insertCoin("Nickel",machine);
  VendingMachine.insertCoin("Dime",machine);
  VendingMachine.pressCandy(machine);
  expect(machine.dispenser).to.eql("Candy");
  })
   it("Does not dispense Candy when the Candy is out of stock",()=>{
  machine.stock = []
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.insertCoin("Quarter",machine);
  VendingMachine.insertCoin("Nickel",machine);
  VendingMachine.insertCoin("Dime",machine);
  VendingMachine.pressCandy(machine);
  expect(machine.dispenser).to.eql("empty");
  })
})
   describe("Returns ",()=>{
     it("Quarters",()=>{
     VendingMachine.insertCoin("Quarter",machine);
     VendingMachine.pressReturnCoins(machine)
     expect(machine.coinReturn).to.include("Quarter")
     expect(machine.display).to.eql("INSERT COINS")
     })
     it("Nickels",()=>{
     VendingMachine.insertCoin("Nickel",machine);
     VendingMachine.pressReturnCoins(machine)
     expect(machine.coinReturn).to.include("Nickel")
     expect(machine.display).to.eql("INSERT COINS")
     })
     it("Dimes",()=>{
     VendingMachine.insertCoin("Dime",machine);
     VendingMachine.pressReturnCoins(machine)
     expect(machine.coinReturn).to.include("Dime")
     expect(machine.display).to.eql("INSERT COINS")
     })
   })
})

