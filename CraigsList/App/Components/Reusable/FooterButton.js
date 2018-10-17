import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/FooterButtonStyle'

const LoginSubButton = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}
                        style={styles.container}>
          <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
);

LoginSubButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    };
export default LoginSubButton;