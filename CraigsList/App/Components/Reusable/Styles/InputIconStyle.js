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
    width: screenwidth-30,
    height: 50,
    // marginHorizontal: 30,
    paddingLeft: 25,
    borderWidth: 2,
    borderColor: '#E5E8E8',
    borderRadius: 10
  },
  icon:{
    position: 'absolute',
    right: 0,
    marginRight: 20,
    // marginLeft: 500,
    marginTop: 25,
    // zIndex: 1
  },
})
