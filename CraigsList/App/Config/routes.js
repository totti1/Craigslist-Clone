import { StackNavigator } from 'react-navigation'
import Discussion from '../Container/Discussion'
import Detail from '../Container/Detail'
import Community from '../Container/Community'
import Card from '../Container/Card'
import Country from '../Container/Country'
import SignupScreen from '../Container/SignupScreen'
import LoginScreen from '../Container/LoginScreen'

// import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    Discussion: {screen: Discussion},
    Detail: {screen: Detail},
    Community: { screen: Community },
    Card: { screen: Card },
    Country: { screen: Country },
    SignupScreen: { screen: SignupScreen },
    LoginScreen: { screen: LoginScreen },
}, {
  // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Card',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
})

export default PrimaryNav
