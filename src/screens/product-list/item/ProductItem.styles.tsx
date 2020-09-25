import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'column',
  },
  price: {
    marginBottom: 12,
  },
  priceContainer: {
    flex: 0,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})
