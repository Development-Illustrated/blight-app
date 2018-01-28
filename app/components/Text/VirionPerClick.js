import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const VirionPerClick = ({perClick}) => (
  <Text style={styles.virionPerSecond}>{perClick} Virion per click</Text>
)

VirionPerClick.propTypes = {
  perClick: PropTypes.number
}

export default VirionPerClick