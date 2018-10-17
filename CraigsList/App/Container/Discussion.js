import React, {Component} from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CommunityStyle'

import InputIcon from '../Components/Reusable/InputIcon';
import CommunityList from '../Components/Reusable/CommunityList'

import landscape from '../Images/Feed/landscape.png'
import anything from '../Images/Feed/appareil.png'
import dog from '../Images/Feed/cover15.png'
import smallDog from '../Images/Feed/beach-boy-couple.png'
import food from '../Images/Feed/food.png'

class Discussion extends Component {

    static propTypes = {
        navigation: PropTypes.object,
      }
    
      constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          page: 1,
          seed: 1,
          error: null,
          refreshing: false,
        };
      }
     onEnd() {
      if(this.state.dataloaded)
      {
       alert("hi");
       this.setState({dataloaded:false});
      }
     }
     componentDidMount() {
        this.makeRemoteRequest();
      }
    
      makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: page === 1 ? res.results : [...this.state.data, ...res.results],
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
      };
    
    
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  render () {


    // const { title } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.textHead}>Discussion</Text>
            <InputIcon  onPress={() => alert('yeah')}/>
          </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <CommunityList 
                    source={item.picture.thumbnail} 
                    text={`${item.name.first} ${item.name.last}`} 
                    onPress={() => this.props.navigation.navigate('Detail', {...item})}/>
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
export default Discussion