
  function itemInStock(machine) {
    if (machine === undefined || machine === null) return false
    var stock = machine.stock || []
    var chosenItem = machine.item || {}

    return stock.filter((stockItem)=>{return (stockItem === chosenItem) }).length > 0;
    }


   function fill(machine,item){
     var stock = machine.stock || []
     stock.push(item)
     machine.stock = stock
    }

module.exports = {itemInStock: itemInStock, fill: fill}