import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { VirionBalance, VirionPerClick } from '../Text'
import styles from './styles'
import PropTypes from 'prop-types'

const Clicker = ({ virionBalance, virionPerClick, updateVirionBalance }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={ updateVirionBalance }>
            <Image
                source={require('./Images/clicker.png')}
                style={styles.clickerImage}
                resizeMode="contain"
            />
        </TouchableOpacity>
        <VirionBalance balance={virionBalance} />
        <VirionPerClick perClick={virionPerClick} />
    </View>
)

Clicker.propTypes = {
    virionBalance: PropTypes.number,
    virionPerClick: PropTypes.number,
    updateVirionBalance: PropTypes.func
}

export default Clicker
