import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  infoContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  topContainer: {},
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  lastButton: { marginLeft: 12 },
  title: {
    marginBottom: 12,
  },
  bold: {
    fontWeight: '700',
    color: '#444',
  },
  mediumText: {
    fontSize: 20,
  },
  bigText: {
    fontSize: 24,
  },
  secondaryText: {
    color: '#777',
  },
  card: {
    backgroundColor: '#ddd',
  },
  cartButton: {
    marginRight: 0,
    color: '#777',
    backgroundColor: '#FFF',
  },
})
