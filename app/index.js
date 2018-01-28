import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigator from './config/routes'

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    $bacteria: '#DD4157',
    $virus: '#059EBE'
})

export default () => <Navigator />
