import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  row: {
    width: 150,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5.0,
    shadowRadius: 2,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.smallMargin
  },
  sectionHeader: {
    paddingTop: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
    // alignSelf: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.snow
  },
  boldLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.charcoal,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: Colors.charcoal,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  headerText:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.charcoal,
    // textAlign: 'center',
    marginBottom: Metrics.smallMargin
  }
})
