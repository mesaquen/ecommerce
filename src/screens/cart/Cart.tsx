import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectSubtotal } from '../../redux/selectors/cartSelectors'
import { SafeAreaView, FlatList, Text, View } from 'react-native'
import EmptyState from '../../components/empty-state/EmptyState'
import ProductItem from '../product-list/item/ProductItem'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartActions'
import ItemSeparator from '../../components/separator/ItemSeparator'
import styles from './Cart.styles'
import MoneyText from '../../components/money-text/MoneyText'

const Cart = (): JSX.Element => {
  const dispatch = useDispatch()
  const subtotal = useSelector(selectSubtotal)
  const items = useSelector(selectCartItems)

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id))
  }
  const renderCartItem = ({ item }) => {
    return (
      <ProductItem
        id={item.id}
        title={item.title}
        key={item.id}
        price={item.price}
        rating={item.rating}
        reviews={item.reviews}
        discount={item.discount}
        onRemovePress={() => handleRemoveItem(item.id)}
        inCart
      />
    )
  }

  return (
    <SafeAreaView style={{flex:1}}>
     

      <FlatList
        style={styles.list}
        data={items}
        renderItem={renderCartItem}
        ListEmptyComponent={EmptyState}
        ItemSeparatorComponent={ItemSeparator}
        />
       
      <View style={styles.footerContainer}>
        <Text style={styles.footerText} >Total:</Text>
       <MoneyText style={styles.footerText} value={subtotal} />
      </View>
    </SafeAreaView>
  )
}

export default Cart
