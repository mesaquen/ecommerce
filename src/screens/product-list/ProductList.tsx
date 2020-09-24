import React, { useEffect, useState } from 'react'
import { View, Button, FlatList } from 'react-native'
import { getProducts } from '../../logic/product/productService'
import ProductItem from './item/ProductItem'

const ProductList = ({ navigation }): JSX.Element => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(0)
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setItems(data._array)
      setPage(data.page ?? 0)
    }
    fetchData()
  }, [])

  const goToDetails = () => {
    navigation.navigate('ProductDetails')
  }

  const hideButton = () => {
    setShowButton(false)
  }

  const loadNextPage = async () => {
    const nextPage = page + 1
    const data = await getProducts(null, null, nextPage)
    if (data.length) {
      setItems(items.concat(data._array))
      setPage(nextPage)
    } else {
      hideButton()
    }
  }

  const renderItem = ({ item }) => {
    return (
      <ProductItem
        id={item.id}
        title={item.title}
        key={item.id}
        price={item.price}
        rating={item.rating}
        reviews={item.reviews}
        discount={item.discount}
      />
    )
  }

  return (
    <View>
      <FlatList data={items} renderItem={renderItem} />
      {showButton && <Button onPress={loadNextPage} title='Go to' />}
    </View>
  )
}

export default ProductList
