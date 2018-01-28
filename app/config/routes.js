import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Map from '../screens/Map'

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      header: null
    }
  }
})