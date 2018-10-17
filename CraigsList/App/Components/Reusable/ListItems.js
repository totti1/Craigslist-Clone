import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'

const ListItems = ({ text, onPress, style }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={style}>{text}</Text>
    </TouchableOpacity>
);

ListItems.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.any
    };
export default ListItems;