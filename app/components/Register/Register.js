import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Register = ({ virusClicked, bacteriaClicked }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Choose a Faction</Text>
    <TouchableOpacity
      onPress={virusClicked}
    >
      <Text style={[styles.button, styles.virus]}>Virus</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={bacteriaClicked}
    >
      <Text style={[styles.button, styles.bacteria]}>Bacteria</Text>
    </TouchableOpacity>
  </View>
)

Register.propTypes = {
  virusClicked: PropTypes.func,
  bacteriaClicked: PropTypes.func
}

export default Register