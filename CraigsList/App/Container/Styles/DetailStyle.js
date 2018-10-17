import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    TextCont: {
        flex: 1,
        marginTop: 50,
      },
      boldLabel: {
        fontWeight: 'bold',
        fontSize: 20,
        // alignSelf: 'center',
        color: Colors.charcoal,
        // textAlign: 'center',
        // marginBottom: Metrics.smallMargin
      },
      bigText:{
        fontSize: 16,
        alignSelf: 'center',
        color: Colors.charcoal,
        margin: 12,
        // padding: 20
      }
})
