import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonStyles'

const LoginSubButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.container} 
                      onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

LoginSubButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    };
export default LoginSubButton;