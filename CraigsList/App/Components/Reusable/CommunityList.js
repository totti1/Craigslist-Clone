import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from './Styles/CommunityListStyle'

import Icons from './Icons'

const CommunityList = ({ text, onPress, style, source }) => (

    <TouchableOpacity style={styles.row} 
                      onPress={onPress}>
    <View style={{justifyContent: 'center'}}>
          <Image  style={styles.image}
                  source={source}/>
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.boldLabel}>{text}</Text>
          <Icons />
        </View>
    </TouchableOpacity>
);

CommunityList.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    source: PropTypes.number,
    };
export default CommunityList;