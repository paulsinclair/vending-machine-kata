import React, {Component} from 'react';

class CoinReturn extends Component {
componentWillMount(){
this.setState ({coinReturn: this.props.coinReturn, onEmpty: this.props.onEmpty})
}
 render(){
   return (
    <div className="CoinReturn">
       RETURNED COINS <br/>
       {this.props.coinReturn.join('; ')}<br/>
    </div>
   );
 }
}

export default CoinReturn
