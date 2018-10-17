import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Icons = ({ text, onPress, style, source }) => (
    <View style={{marginTop: 30, flexDirection: 'row'}}>
        <FontAwesome  name='star'
                      size={25} 
                      color="#D5D8DC"
                      style={{marginLeft: 20}}/>
        <FontAwesome  name='heart' 
                      size={25} 
                      color="#D5D8DC"
                      style={{marginLeft: 20}}/>
        <FontAwesome  name='share' 
                      size={25} 
                      color="#D5D8DC"
                      style={{marginLeft: 20}}/>
    </View>
);

Icons.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    source: PropTypes.number,
    };
export default Icons;