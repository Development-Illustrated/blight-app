import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const imageWidth = Dimensions.get('window').width / 2

export default EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    clickerImage: {
       width: imageWidth,
       height: imageWidth
    },
    virionBalance: {
        fontSize: 22,
        fontWeight: '600',
        color: '$white',
        marginTop: 15
    },
    virionPerSecond: {
        fontSize: 15,
        color: '$white'
    }
})