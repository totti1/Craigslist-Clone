import React, {Component} from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CommunityStyle'

import InputIcon from '../Components/Reusable/InputIcon';
import CommunityList from '../Components/Reusable/CommunityList'

import landscape from '../Images/Feed/landscape.png'
import anything from '../Images/Feed/bizarre.png'
import dog from '../Images/Feed/dog.png'
import smallDog from '../Images/Feed/smallDog.png'
import food from '../Images/Feed/food.png'

class Housing extends Component {
  state = {
    dataObjects: [
      {image: landscape, title: 'Snowbirds Mature, Reliable guy can drive your car to or', description: '14 items'},
      {image: anything, title: 'Yorkie Poddle Puppies', description: '8 items'},
      {image: dog, title: 'AKC Golden Retriever filled of 5 males and a Female', description: '12 items'},
      {image: smallDog, title: 'its a Dog', description: '8 items'},
      {image: food, title: 'SweetHeart child care feel special for 2 yr old', description: '22 items'},
    ]
  }
  
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  render () {

    const { title } = this.props.navigation.state.params

    console.log
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.textHead}>{title}</Text>
            <InputIcon  onPress={() => alert('yeah')}/>
          </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={({ item }) => (
            <CommunityList source={item.image} text={item.title} onPress={() => this.props.navigation.navigate('Detail', {...item})}/>
          )}
          numColumns={1}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          // ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}
export default Housing