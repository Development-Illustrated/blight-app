import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const VirionBalance = ({balance}) => (
  <Text style={ styles.virionBalance }> 
    Virion: {balance}
  </Text>
)

VirionBalance.propTypes = {
  balance: PropTypes.number
}

export default VirionBalance