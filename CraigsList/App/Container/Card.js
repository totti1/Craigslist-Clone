import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { View, SectionList, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from './Styles/CardStyle'

class Card extends Component {

  constructor(props){
    super (props);
    this.state= {
      // navigation: this.props.navigation,
      data: [
        {
          key: 'First',
          data: [
            {icons: 'users', title: 'Community', description: '14 items'},
            {icons: 'home', title: 'Housing', description: '8 items'},
            {icons: 'suitcase', title: 'Jobs', description: '12 items'},
            {icons: 'user', title: 'Personals', description: '8 items'},
            {icons: 'dollar', title: 'For Sale', description: '22 items'},
            {icons: 'comments', title: 'Discussion', description: '11 items'}
          ]
        }
      ]
    }
}

card = (item) => {

  // const {title} = this.state

  // if (item.title === 'Community') {
    this.props.navigation.navigate('Community', item)
  // }
  // else if (item.title === 'Housing') {
  //   this.props.navigation.navigate('Country', item)
  // }

  // else if (item.title === 'Jobs') {
  //   this.props.navigation.navigate('LoginScreen', item)
  // }

  // else if (item.title === 'Personals') {
  //   this.props.navigation.navigate('SignupScreen', item)
  // }

  // else if (item.title === 'For Sale') {
  //   this.props.navigation.navigate('Country', item)
  // }
  // else {
  //   this.props.navigation.navigate('LoginScreen', item)
  // }
  
  // alert('ok')
  // console.log('enabled')
}

  // state = {
  //   data: [
  //     {
  //       key: 'First',
  //       data: [
  //         {icons: 'users', title: 'Community', description: '14 items'},
  //         {icons: 'home', title: 'Housing', description: '8 items'},
  //         {icons: 'suitcase', title: 'Jobs', description: '12 items'},
  //         {icons: 'user', title: 'Personals', description: '8 items'},
  //         {icons: 'dollar', title: 'For Sale', description: '22 items'},
  //         {icons: 'comments', title: 'Discussion', description: '11 items'}
  //       ]
  //     }, 
  //   ]
  // }


  renderSectionHeader ({section}) {
    switch (section.key) {
      case 'First':
        return <View style={styles.sectionHeader}><Text style={styles.headerText}>Rwanda</Text></View>
      default:
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>Second Section</Text></View>
    }
  }

  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Full List Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Full List Footer - </Text>

  // Does each section need a footer?
  renderSectionFooter = () =>
    <Text style={styles.label}> END SECTION!!!! </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  renderSectionSeparator = () =>
    <Text style={styles.label}> \/\/\/\/\/\/\/\/ </Text>

  keyExtractor = (item, index) => index

  oneScreensWorth = 30

  render () {

    // const { name } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>name</Text>
      </View>
        <SectionList
          // numColumns= {2}
          sections={this.state.data}
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={({ item }) => (
            // <TouchableOpacity onPress={() => this.props.navigation.navigate('Community', {...item})} 
            //                   style={styles.row}>
              <TouchableOpacity onPress={() => this.card(item)} 
                              style={styles.row}>
              <FontAwesome  name={item.icons} 
                            size={40} 
                            color="#4980f9"/>
              <Text style={styles.boldLabel}>{item.title}</Text>
              <Text style={styles.label}>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
        />
      </View>
    )
  }
}
export default Card