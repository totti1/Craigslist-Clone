import { StyleSheet, Dimensions } from 'react-native'

const screenwidth = Dimensions.get('window').width

export default StyleSheet.create({
  inputWrapper: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
    // marginRight: 20
  },
  input: {
    marginTop: 20,
    backgroundColor: '#f6f7f9',
    width: screenwidth-50,
    height: 50,
    // marginHorizontal: 30,
    paddingLeft: 25,
    borderWidth: 2,
    borderColor: '#E5E8E8',
    borderRadius: 10
  },
})
