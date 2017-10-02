"use strict"

const expect = require("Chai").expect
const Calculator = require("../src/app/VendingCalculator")

describe("Calculator",()=>{
    var item;
    var machine;
    beforeEach(()=> {
      item = {};
      machine = {};
      item.name = "Item";
      machine.float = ["Quarter", "Quarter", "Quarter", "Dime", "Dime", "Dime", "Nickel", "Nickel", "Nickel"]
    })
  describe('Make Change Returns', () => {
    it(" nothing if no money is inserted", ()=> {
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0;
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.eql([])
    })
    it(" a quarter if total amount inserted is 25c over the price", ()=> {
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0.25;
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.include("Quarter")
    })
    it(" two quarters if total amount inserted is 50c over the price", ()=> {
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0.50;
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.include("Quarter")
      expect(machine.change.length).to.equal(2)
    })
    it(" a dime if total amount inserted is 10c over the price", ()=> {
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0.10;
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.include("Dime")
    })
    it(" two dimes if total amount inserted is 20c over the price", ()=> {
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0.20;
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.include("Dime")
      expect(machine.change.length).to.equal(2)
    })
    it(" a nickel if total amount inserted is 5c over the price", ()=> {
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0.05;
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.include("Nickel")
    })
  })
  describe('Make Change Removes', () => {
    beforeEach(()=> {
      item = {};
      machine = {};
      item.name = "Item";
      machine.float = ["Quarter", "Quarter", "Quarter", "Dime", "Dime", "Dime", "Nickel", "Nickel", "Nickel"]
    })
    it(" a dime if total amount inserted is 10c over the price", ()=>{
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0.10;
      machine.float = ["Quarter","Dime"]
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.include("Dime")
      expect(machine.float).to.not.include("Dime")
      expect(machine.float).to.include("Quarter")
    })
    it(" a nickel from the float if total amount inserted is 5c over the price", ()=>{
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0.05;
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.include("Nickel")
      expect(machine.float.filter((coin)=>{return (coin === "Nickel")}).length).to.equal(2)
      expect(machine.float.filter((coin)=>{return (coin === "Quarter")}).length).to.equal(3)
      expect(machine.float.filter((coin)=>{return (coin === "Dime")}).length).to.equal(3)
    })
    it(" a quarter from float if total amount inserted is 25c over the price", ()=>{
      item.price = 0
      machine.item = item;
      machine.totalMoneyInserted = 0.25;
      machine.float = ["Quarter"]
      machine.change = Calculator.makeChange(machine)
      expect(machine.change).to.include("Quarter")
      expect(machine.float).to.eql([])
    })
  });
  describe("isFloatLow",()=>{
    it(" returns true if the there are no Nickels in the float",()=>{
      machine.float = machine.float.filter((coin)=>{return (coin !== "Nickel")})
      expect(Calculator.isFloatLow(machine)).to.equal(true)
    })
    it(" returns false if the there is one or more Nickels in the float",()=>{
      machine.float = machine.float.filter((coin)=>{return (coin !== "Nickel")})
      machine.float.push("Nickel")
      expect(Calculator.isFloatLow(machine)).to.equal(false)
      machine.float.push("Nickel")
      expect(Calculator.isFloatLow(machine)).to.equal(false)
    })
    it(" returns true if the there are no Dimes in the float",()=>{
      machine.float = machine.float.filter((coin)=>{return (coin !== "Dime")})
      expect(Calculator.isFloatLow(machine)).to.equal(true)
    })
    it(" returns true if the there is one Dime in the float",()=>{
      machine.float = machine.float.filter((coin)=>{return (coin !== "Dime")})
      machine.float.push("Dime")
      expect(Calculator.isFloatLow(machine)).to.equal(true)
    })
    it(" returns false if the there is two or more Dimes in the float",()=>{
      machine.float = machine.float.filter((coin)=>{return (coin !== "Dime")})
      machine.float.push("Dime")
      machine.float.push("Dime")
      expect(Calculator.isFloatLow(machine)).to.equal(false)
      machine.float.push("Dime")
      expect(Calculator.isFloatLow(machine)).to.equal(false)
    })
  })
  it(" returns true if the there are no Quarters in the float",()=>{
    machine.float = machine.float.filter((coin)=>{return (coin !== "Quarter")})
    expect(Calculator.isFloatLow(machine)).to.equal(true)
  })
  it(" returns false if the there is one or more Quarters in the float",()=>{
    machine.float = machine.float.filter((coin)=>{return (coin !== "Quarter")})
    machine.float.push("Quarter")
    expect(Calculator.isFloatLow(machine)).to.equal(false)
    machine.float.push("Quarter")
    expect(Calculator.isFloatLow(machine)).to.equal(false)
  })
})
