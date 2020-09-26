import { StyleSheet } from 'react-native'

const footerSize = 60

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginBottom: footerSize,
  },
  footerContainer: {
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal:24,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: footerSize,
    backgroundColor: 'red',
  },
  footerText: {
      marginRight: 8,
      color: '#FFF',
      fontWeight: '700',
      fontSize: 24
  }
})
