import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, ImageBackground } from 'react-native'
import styles from './Styles/HeaderStyle'


import Path from '../../Images/Logo/Path.png'
import Logo from '../../Images/Logo/Logo.png'

export default class LoginHeader extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Path}/>
        </View>
        <View style={styles.logoContainer}>
          <Image source={Logo}/>
          <Text style={styles.headerText}>CraigsList</Text>
        </View>
        
      </View>
    )
  }
}
