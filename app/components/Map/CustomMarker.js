import React from 'react'
import Text from 'react-native'
import { MapView } from 'expo'
import styles from './styles'
import PropTypes from 'prop-types'

const CustomMarker = ({ landmark, index }) => (
  <MapView.Marker
    coordinate={landmark.latlng}
    title={marker.title}
    key={index}
  />
)

CustomMarker.propTypes = {
  landmark: PropTypes.object,
  index: PropTypes.number
}

export default CustomMarker