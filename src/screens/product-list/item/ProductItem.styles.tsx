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
    justifyContent: 'space-between',
  },
  upperContent: {
    flex:1,
    flexDirection: "row",
  },
  titleContainer: {
    flexDirection: 'column',
    flex: 1
  },
  price: {
    marginBottom: 12,
  },
  priceContainer: {
    flexShrink: 0,
    width: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexShrink: 0,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  flat: {
    color: '#09D'
  },
  flatRemove: {
    color: '#D30'
  }
})
