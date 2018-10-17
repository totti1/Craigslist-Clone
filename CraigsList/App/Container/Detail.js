import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, StatusBar, Image, ScrollView } from 'react-native'

// Styles
import styles from './Styles/DetailStyle'
import landscape from '../Images/Feed/landscape.png'

import Icons from '../Components/Reusable/Icons'

class LoginScreen extends Component {
  render () {

    const { title, image } = this.props.navigation.state.params

    return (
      <ScrollView style={styles.container}>
        <View style={{flex: 1}}>
            <View>
                <Image 
                    style={{width: 500, height: 300}}
                    source={image}/>
            </View>
            <View style={{marginTop: -10}}>
                <Icons />
            </View>
            <View style={{flex: 1, margin: 12, marginVertical: 20}}>
                <Text style={styles.boldLabel}>{title}</Text>
            </View>
        </View>
        <View style={{flex: 1,justifyContent: 'center'}}>
            <Text style={styles.bigText}>
                Book now for the rate on Tampa Area to the Northeasr Car transport (ANY STARTING OR ENDING LOCATION) 
                i'll pick-up your car in FL, NY, NJ, PA or anywhere you need and drive it directly to your destination. 
                I can pick you up at the airport or drive the vehicle to your home.

                Mature,  responsible Dad, Husband, Homeowner, licensed and insured (owner of 2 cars). 
                I made FL/NY trip over 20 times in 2017 and can provider fast efficient, 
                stress-free transpotation of your vehicle.
            </Text>
        </View>
      </ScrollView>
    )
  }
}

export default LoginScreen
