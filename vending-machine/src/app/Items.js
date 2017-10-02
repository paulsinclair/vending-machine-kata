const Display = require("../app/VendingDisplay")
const Calculator = require("../app/VendingCalculator")
const Inventory = require("../app/Inventory")

const itemInStock = Inventory.itemInStock

const cola = {name: "Cola", price: 1.00, image: "images/cola.png"}
const chips = {name: "Chips", price: 0.50, image: "images/chips.png"}
const candy = {name: "Candy", price: 0.65, image: "images/candy.png"}
const empty = {name: "Empty", price: 0, image: 'images/empty.png'}

function dispenseItemIfEnoughMoneyIsInserted(machine) {
  var item = machine.item
  if (itemInStock(machine) === false)
  {
    processProductOutOfStock(machine)
    return
  }
  if (machine.totalMoneyInserted === undefined || machine.totalMoneyInserted < item.price) {
    processNotEnoughMoneyInserted(machine)
    return
  }
    dispenseItem(machine)
}

  function processProductOutOfStock(machine){
    machine.dispenser = empty
    Display.updateDisplayWithMessage(machine, "OUT OF STOCK")
  }

  function processNotEnoughMoneyInserted(machine){
    machine.dispenser = empty
    Display.updateDisplayWithPrice(machine);
  }

  function dispenseItem(machine){
    machine.dispenser = machine.item
    machine.change = Calculator.makeChange(machine)
    Display.updateDisplayWithMessage(machine, "THANK YOU")
    machine.totalMoneyInserted = 0;
  }

module.exports = {dispenseItem: dispenseItemIfEnoughMoneyIsInserted, cola: cola, chips: chips, candy: candy, empty: empty }
