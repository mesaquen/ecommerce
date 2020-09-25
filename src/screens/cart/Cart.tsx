import React from 'react'
import {useSelector} from 'react-redux'
import { FlatList, Text, View } from 'react-native'

const Cart = (): JSX.Element => {
  const items = useSelector(state => state.cart.items)
  const renderCartItem = ({ item }) => {
    return (
      <View key={item.id}>
        <Text>{item.title}</Text>
      </View>
    )
  }
  return (
    <View>
      <FlatList data={items} renderItem={renderCartItem} />
    </View>
  )
}

export default Cart
