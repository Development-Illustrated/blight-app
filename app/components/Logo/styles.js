import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 170,
    left: 0,
    right: 0,
    '@media ios': {
      paddingTop: 20
    }
  },
  text: {
    alignSelf: 'center',
    // marginTop: 100,
    fontSize: 32,
    fontWeight: 'bold',
    color: '$white'
  }
})