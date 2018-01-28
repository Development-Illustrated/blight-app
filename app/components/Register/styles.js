import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '$white',
    padding: 20,
    marginTop: 20
  },
  bacteria: {
    backgroundColor: '$bacteria'
  },
  virus: {
    backgroundColor: '$virus'
  },
  heading: {
    fontSize: 28,
    color: '$white'
  }
})