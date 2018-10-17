import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from './Styles/InputIconStyle'

const InputIcon = ({ text, onPress, onChangeText, value }) => (
    <View style={styles.inputWrapper}>
        <TextInput  style={styles.input}
                    placeholder='Search'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    placeholderTextColor='#99A3A4'
                    underlineColorAndroid='transparent'
                    onChangeText = {onChangeText}
                    value = {value} />
        <TouchableOpacity style={styles.icon}
                          onPress={onPress}>
            <Ionicons name="ios-search" 
                      size={40} 
                      color="#4980f9" />
        </TouchableOpacity>
    </View>
);

InputIcon.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.any
    };
export default InputIcon;