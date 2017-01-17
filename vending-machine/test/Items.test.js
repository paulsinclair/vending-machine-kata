"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

const expect = require('chai').expect;
const Items = require("../src/app/Items");
const VendingMachine = require("../src/app/VendingMachine");
var machine = {};


describe("Items",()=>{
  var item;
  beforeEach(()=>{
   item = {};
   item.name = "Item";
   item.price = 0;
   machine.item = item;
   machine.totalMoneyInserted = 0;
   machine.display = "INSERT COINS"
   machine.stock = [item]
  })
  it ("Dispenses an Item Whe button pressed",()=>{
  Items.dispenseItem(machine, item);

  expect(machine.dispenser).to.eql(item)
  })

  it("Does not dispense an item when there is not enough money",()=>{
    item.price = 1;

    Items.dispenseItem(machine, item);

    expect(machine.dispenser).to.eql(Items.empty)
})
it ("Updates display with PRICE of item when item fails to dispense.",()=>{
  item.price = 1;

  Items.dispenseItem(machine, item);

  expect(machine.display).to.eql("PRICE $1.00")

  item.price = 2;

  Items.dispenseItem(machine, item);

  expect(machine.display).to.eql("PRICE $2.00")
})
  it ("Updates display with OUT OF STOCK of item when item is out of stock.",()=>{
  item.price = 1;
  machine.stock = []

  Items.dispenseItem(machine, item);

  expect(machine.display).to.eql("OUT OF STOCK")
  expect(machine.dispenser).to.eql(Items.empty)
  })

  it("Does dispense an item when there is exactly enough money",()=>{
    item.price = 0.05;
    VendingMachine.insertCoin("Nickel",machine)

    Items.dispenseItem(machine, item);

    expect(machine.dispenser).to.eql(item)

})

  it("Does dispense an item when there is more than enough money",()=>{
    item.price = 1;
    VendingMachine.insertCoin("Quarter",machine)
    VendingMachine.insertCoin("Quarter",machine)
    VendingMachine.insertCoin("Quarter",machine)
    VendingMachine.insertCoin("Quarter",machine)
    VendingMachine.insertCoin("Quarter",machine)
    VendingMachine.insertCoin("Quarter",machine)
    VendingMachine.insertCoin("Quarter",machine)

    Items.dispenseItem(machine, item);

    expect(machine.dispenser).to.eql(item)
})
it("Updates Display to THANK YOU after an item is dispensed.",()=>{
  Items.dispenseItem(machine, item);

  expect(machine.display).to.eql("THANK YOU")
})
it("Updates Total Amount to zero after an item is dispensed.",()=>{
  VendingMachine.insertCoin("Quarter",machine)
  Items.dispenseItem(machine, item);


  expect(machine.totalMoneyInserted).to.equal(0)
})
})