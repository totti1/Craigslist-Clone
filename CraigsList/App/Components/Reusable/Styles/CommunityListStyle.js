import {Dimensions, Platform, StyleSheet} from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../../Themes'

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
    width: screenwidth -20,
    height: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5.0,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: Colors.snow,
    marginVertical: 10,
    margin: 10,
    // padding: 5,
    paddingVertical: 10,
    borderRadius: Metrics.smallMargin,
    flexDirection: 'row'
  },
  boldLabel: {
    flex:1 ,
    fontWeight: 'bold',
    fontSize: 16,
    // alignSelf: 'center',
    color: Colors.charcoal,
    // textAlign: 'center',
    // marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  image: {
    width: 80,
    height: 90,
    borderRadius: 5,
    marginLeft: 10
  },
  textHead:{
    marginLeft: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
})
