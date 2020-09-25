import React from 'react'
import {useSelector} from 'react-redux'
import {selectCartItems} from '../../redux/selectors/cartSelectors'
import { FlatList, Text, View } from 'react-native'
import EmptyState from '../../components/empty-state/EmptyState'

const Cart = (): JSX.Element => {
  const items = useSelector(selectCartItems)
  const renderCartItem = ({ item }) => {
    return (
      <View key={item.id}>
        <Text>{item.title}</Text>
      </View>
    )
  }
  return (
    <View>
      <FlatList data={items} renderItem={renderCartItem} ListEmptyComponent={EmptyState}/>
    </View>
  )
}

export default Cart
