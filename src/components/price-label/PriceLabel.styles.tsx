import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center'
  },
  sellingPrice: {
      color: '#444',
    fontSize: 20,
    fontWeight: '700',
  },

  fullPrice: {
    color: '#999',
    textDecorationLine: 'line-through',
  },
  
  discountLabel: {
    width: 100,
    color: '#FFF',
    backgroundColor: '#C22',
    textAlign: 'center',
  },
})
