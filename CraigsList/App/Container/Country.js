import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CountryStyle'

import UserInput from '../Components/Reusable/UserInput'
import InputIcon from '../Components/Reusable/InputIcon';
import ListItems from '../Components/Reusable/ListItems'

class Country extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      // showModal: false,
      refreshing: false,
      dataloaded: false,
      data:[],
      text: '',
      countries: []

    };
  this.onRefresh = this.onRefresh.bind(this);
  this.onEnd = this.onEnd.bind(this);

  }
 onEnd() {
  if(this.state.dataloaded)
  {
   alert("hi");
   this.setState({dataloaded:false});
  }
 }
   componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
            data:responseData,  
          dataSource: responseData,
          loaded: true,   
          refreshing: false,
          countries: responseData

        });
      })
      .done();
  }

 onRefresh() {
    this.setState({
          refreshing: true,
    });


setTimeout( () => {

  this.setState({
      refreshing: false,
      dataloaded:true,
    });

      },200);
      this.fetchData();

  }

  search(text)  {

    this.setState({text: text})
    let countryArray = this.state.dataSource

    for(const i=0; i < countryArray.length; i++){
      if (text === countryArray[i].name){
        this.setState({dataSource: [countryArray[i]]})
      }
    }
    if(!text){
      this.setState({dataSource: this.state.countries})
    }
    // alert(text)
  }
  onLearnMore = () => {
    // this.props.navigation.navigate('Card')
    alert('boom')
  }

  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
  <View
  style={{
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE",
    // marginLeft: "14%"
  }}
/>
  keyExtractor = (item, index) => index

  oneScreensWorth = 20

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.textHead}> Countries </Text>
          <InputIcon  onPress={this.onSearch}
                      onChangeText={(text) => this.search(text)}
                      value={this.state.text} />
        </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataSource}
          // renderItem={item => this.renderRow(item, this.props)}
          renderItem={({ item }) => (
            <View style={styles.row}>
            <ListItems onPress={() => this.props.navigation.navigate('Card', {...item})} text={item.name} style={styles.boldLabel}/>
            </View>
          )}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}
export default Country