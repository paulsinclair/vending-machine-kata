"use strict"

  function itemInStock(machine) {
    if (machine === undefined || machine === null) return false
    var stock = machine.stock || []
    var chosenItem = machine.item || {}

    return stock.filter((stockItem)=>{return (stockItem === chosenItem) }).length > 0;
    }

module.exports = {itemInStock: itemInStock}