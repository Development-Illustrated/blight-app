import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image resizeMode='contain' style={styles.icon} source={require('./Images/globe.png')} />
    </TouchableOpacity>
  </View>
)

Header.propTypes = {
  onPress: PropTypes.func
}

export default Header