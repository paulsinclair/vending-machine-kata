var validCoinAmounts = {"Dime": 0.10, "Quarter": 0.25, "Nickel": 0.05}

function returnCoin(coin, coinReturn){
  coinReturn = (coinReturn || [])
  coinReturn.push(coin)
  return coinReturn
}

function dispenseChange(machine){
   var coinReturn = machine.coinReturn
   var change = machine.change

   change.forEach((coin) =>{returnCoin(coin, coinReturn)})

   machine.change = []
   machine.coinReturn = coinReturn
}

function isValidCoin(coin) {
  if (validCoinAmounts[coin]) return true;
  return false;
}


module.exports = {isValidCoin: isValidCoin, validCoinAmounts: validCoinAmounts, returnCoin: returnCoin, dispenseChange: dispenseChange}