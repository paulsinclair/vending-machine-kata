import React, { Component } from 'react';

import VendingMachine from '../app/VendingMachine.js'
const insertCoin = VendingMachine.insertCoin

class CoinSlot extends Component {
  render() {
    return (
      <div className="CoinSlot">
   COIN SLOT
     <form >
               Type COIN: <input type="text" name="lname"/>
                <input type="submit" value="Insert"/>
             </form>
      </div>
    );
  }
}

export default CoinSlot;