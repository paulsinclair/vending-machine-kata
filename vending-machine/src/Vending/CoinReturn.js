import React, {Component} from 'react';
import { View} from 'react-native'

class CoinReturn extends Component {
componentWillMount(){
this.state = {coinReturn: this.props.coinReturn, onEmpty: this.props.onEmpty}
}
 render(){
   return (
    <div className="CoinReturn">
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center', alignItems: 'center',}}>
       RETURNED COINS <br/>
       {this.props.coinReturn.join('; ')}
      </View>
    </div>
   );
 }
}

export default CoinReturn