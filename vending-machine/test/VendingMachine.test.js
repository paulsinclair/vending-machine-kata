"use strict"
const expect = require('chai').expect;

const Items = require("../src/app/Items")
const VendingMachine = require("../src/app/VendingMachine");

 describe('Vending Machine',() => {
   beforeEach(() => {
    VendingMachine.totalMoneyInserted = 0;
    VendingMachine.display = "INSERT COINS";
    VendingMachine.coinReturn = [];
    VendingMachine.stock = [Items.cola, Items.chips, Items.candy]
     VendingMachine.float = ["Nickel","Dime","Dime","Quarter"]
   })
  describe("when no coins are inserted",()=>{
    it("displays INSERT COINS",()=>{
      expect (VendingMachine.display).to.equal("INSERT COINS")
  })
})
   describe("when given a valid coin", () => {
     it("Adds a nickel to the total", () => {
       VendingMachine.insertCoin("Nickel");

     expect (VendingMachine.display).to.equal("$0.05")
    })
  it("Adds multiple nickels to the total", () => {
       VendingMachine.insertCoin("Nickel");
       VendingMachine.insertCoin("Nickel");
       VendingMachine.insertCoin("Nickel");
       VendingMachine.insertCoin("Nickel");
      expect (VendingMachine.display).to.equal("$0.20")
     })
  it("Adds a dime to the total", () => {
       VendingMachine.insertCoin("Dime");

     expect (VendingMachine.display).to.equal("$0.10")
    })
   it("Adds a quarter to the total", () => {
       VendingMachine.insertCoin("Quarter");

     expect (VendingMachine.display).to.equal("$0.25")
    })
  })
  describe("when given an inValid coin", () => {
   it("Does not update total",()=>{
   VendingMachine.insertCoin("Penny",VendingMachine);
  expect (VendingMachine.display).to.equal("INSERT COINS")
})
it("Puts the coin in the reject tray",()=>{
  VendingMachine.coinReturn = ["Yen"];
   VendingMachine.insertCoin("Penny", VendingMachine);
  expect(VendingMachine.returnedCoins()).to.include("Penny")
})
it("Puts multiple coins in the reject tray",()=>{
   VendingMachine.insertCoin("Penny", VendingMachine);
   VendingMachine.insertCoin("Peso",VendingMachine);
   VendingMachine.insertCoin("Yen",VendingMachine);
  expect(VendingMachine.coinReturn).to.include("Penny")
  expect(VendingMachine.returnedCoins()).to.include("Peso")
  expect(VendingMachine.returnedCoins()).to.include("Yen")
  expect(VendingMachine.returnedCoins().length).to.equal(3)
})
})
describe("Display ",()=>{
  it("Shows 'INSERT COINS' when the amount is zero",()=>{
    expect(VendingMachine.display).to.eql("INSERT COINS")
})
  it("Shows the correct amount when the amount is greater than zero",()=>{
    VendingMachine.insertCoin("Quarter");
    expect(VendingMachine.display).to.eql("$0.25")
  })
})
 describe("Dispenser",()=>{
   it("Does not dispense cola when there are no coins inserted",()=>{
     VendingMachine.pressCola();
     expect(VendingMachine.dispenser).to.eql("empty");
     expect(VendingMachine.display).to.eql("INSERT COINS")
    })
it("Dispense Cola if there is enough money inserted",()=>{
    VendingMachine.insertCoin("Quarter");
    VendingMachine.insertCoin("Quarter");
    VendingMachine.insertCoin("Quarter");
    VendingMachine.insertCoin("Quarter");
    VendingMachine.pressCola();
    expect(VendingMachine.dispenser).to.eql("Cola");
   expect(VendingMachine.display).to.eql("INSERT COINS")
})
it("Does not dispense Cola if there was less than $1.00 inserted",()=>{
    VendingMachine.insertCoin("Quarter");
    VendingMachine.insertCoin("Quarter");
    VendingMachine.insertCoin("Quarter");
    VendingMachine.pressCola();
    expect(VendingMachine.dispenser).to.eql("empty");

})
it("Dispenses Chips when the Chips button is pressed and there is $0.50 inserted",()=>{
  VendingMachine.insertCoin("Quarter");
  VendingMachine.insertCoin("Quarter");
  VendingMachine.pressChips();
  expect(VendingMachine.dispenser).to.eql("Chips");
  })
it("Dispenses Chips and gives change when the Chips button is pressed and there is more than $0.50 inserted",()=>{
  VendingMachine.insertCoin("Quarter");
  VendingMachine.insertCoin("Quarter");
  VendingMachine.insertCoin("Quarter");
  VendingMachine.pressChips();
  expect(VendingMachine.dispenser).to.eql("Chips",VendingMachine);
  expect(VendingMachine.returnedCoins()).to.include("Quarter")
  })
it("Dispenses Candy when the Candy button is pressed and there is $0.65 inserted",()=>{
  VendingMachine.insertCoin("Quarter");
  VendingMachine.insertCoin("Quarter");
  VendingMachine.insertCoin("Nickel");
  VendingMachine.insertCoin("Dime");
  VendingMachine.pressCandy();
  expect(VendingMachine.dispenser).to.eql("Candy");
  })
   it("Does not dispense Candy when the Candy is out of stock",()=>{
  VendingMachine.stock = []
  VendingMachine.insertCoin("Quarter");
  VendingMachine.insertCoin("Quarter");
  VendingMachine.insertCoin("Nickel");
  VendingMachine.insertCoin("Dime");
  VendingMachine.pressCandy();
  expect(VendingMachine.dispenser).to.eql("empty");
  })
})
   describe("Returns ",()=>{
     it("Quarters",()=>{
     VendingMachine.insertCoin("Quarter");
     VendingMachine.pressReturnCoins(VendingMachine)
     expect(VendingMachine.returnedCoins()).to.include("Quarter")
     expect(VendingMachine.display).to.eql("INSERT COINS")
     })
     it("Nickels",()=>{
     VendingMachine.insertCoin("Nickel");
     VendingMachine.pressReturnCoins(VendingMachine)
     expect(VendingMachine.returnedCoins()).to.include("Nickel")
     expect(VendingMachine.display).to.eql("INSERT COINS")
     })
     it("Dimes",()=>{
     VendingMachine.insertCoin("Dime");
     VendingMachine.pressReturnCoins(VendingMachine)
     expect(VendingMachine.returnedCoins()).to.include("Dime")
     expect(VendingMachine.display).to.eql("INSERT COINS")
     })
   })
})

