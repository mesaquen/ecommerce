import { Dimensions, StyleSheet } from 'react-native'
const gray = '#999'
export default StyleSheet.create({
  container: {
      flex: 1,
      height: Dimensions.get('screen').height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
        color: gray
    },
    text: {
        color: gray,
    fontSize: 14,
  },
})
