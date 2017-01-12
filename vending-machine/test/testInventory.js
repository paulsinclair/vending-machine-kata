"use strict"
const expect = require('chai').expect;

const ItemInStock = require("../app/Inventory").itemInStock

const ITEM = {name: "Item Name", price: 0.00}

describe("Inventory",()=>{
  var machine
  beforeEach(()=>{
    machine = {}
    machine.item = ITEM
    machine.stock = [ITEM,undefined,null]
  })
  describe("Item In Stock",()=>{
    it("Returns False if the item is not in stock",()=>{
      machine.stock = []
      expect (ItemInStock(machine)).to.equal(false)
  })
    it("Returns True if the item is in stock",()=>{
      expect (ItemInStock(machine)).to.equal(true)
  })
    it("Returns False if the machine is undefined or null",()=>{
      machine = null
      expect (ItemInStock(machine)).to.equal(false)
      expect (ItemInStock()).to.equal(false)
  })
    it("Returns False if the machine item is undefined",()=>{
      machine.item = undefined
      expect (ItemInStock(machine)).to.equal(false)
  })
    it("Returns False if the machine stock is undefined",()=>{
      machine.stock = undefined
      expect (ItemInStock(machine)).to.equal(false)
  })
    it("Returns False if the machine item is undefined and stock contains undefined",()=>{
      machine.item = undefined
      expect (ItemInStock(machine)).to.equal(false)
  })
 })
})