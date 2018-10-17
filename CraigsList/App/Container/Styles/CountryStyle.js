import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

const screenwidth = Dimensions.get('window').width

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: Colors.snow
  },
  row: {
    flex: 1,
    // backgroundColor: Colors.fire,
    marginVertical: 15,
    // justifyContent: 'center'
  },
  boldLabel: {
    marginLeft: 10,
    fontWeight: 'bold',
    // alignSelf: 'center',
    color: Colors.charcoal,
    // textAlign: 'left',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  headerContainer:{
  },
  textHead:{
    marginLeft: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  // inputWrapper: {
  //   // flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center'
  //   // marginRight: 20
  // },
  // input: {
  //   marginTop: 20,
  //   backgroundColor: '#f6f7f9',
  //   width: screenwidth-30,
  //   height: 50,
  //   // marginHorizontal: 30,
  //   paddingLeft: 25,
  //   borderWidth: 2,
  //   borderColor: '#E5E8E8',
  //   borderRadius: 10
  // },
  // icon:{
  //   position: 'absolute',
  //   right: 0,
  //   marginRight: 20,
  //   // marginLeft: 500,
  //   marginTop: 25,
  //   // zIndex: 1
  // },
})
