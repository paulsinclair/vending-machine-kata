"use strict"
const expect = require('chai').expect;
const createMachine = require("../src/app/MachineFactory").createMachine;
const Items = require("../src/app/Items")

var machine

describe('Machine Factory',() => {
  beforeEach(() => {
    machine = createMachine()
//    VendingMachine.stock = [Items.cola, Items.chips, Items.candy]
//    VendingMachine.float = ["Nickel","Dime","Dime","Quarter"]
   })
  describe("creates a machine",()=>{
   it("which displays INSERT COINS",()=>{
      expect (machine.display).to.equal("INSERT COINS")
      })
    it("which has an empty coin return",()=>{
      expect(machine.coinReturn).to.eql([])
    })
    it("which has zero money inserted",()=>{
      expect(machine.totalMoneyInserted).to.equal(0)
    })
    it("which has an empty float",()=>{
      expect(machine.float).to.eql([])
    } )
    it("which has an empty acceptedCoins",()=>{
    expect(machine.acceptedCoins).to.eql([])})
    it(" dispenser has the empty item",()=>{
    expect(machine.dispenser).to.eql(Items.empty)
    })
 })
})