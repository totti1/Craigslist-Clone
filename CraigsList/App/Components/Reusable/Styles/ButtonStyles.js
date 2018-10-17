import { StyleSheet, Dimensions } from 'react-native'

const screenwidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: -15,
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4980f9',
    width: screenwidth-50,
    height: 50,
    borderRadius: 4
  },
  buttonText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
})
