import React, { useEffect, useState } from 'react'
import {   View, Button, FlatList, ActivityIndicator } from 'react-native'
import { getProducts } from '../../logic/product/productService'
import ItemSeparator from './item/ItemSeparator'
import ProductItem from './item/ProductItem'
import styles from './ProductList.styles'
import SearchBar from '../../components/search-bar/SearchBar'

const ProductList = ({ navigation }): JSX.Element => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [page, setPage] = useState(0)
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setItems(data._array)
      setPage(data.page ?? 0)
      setLoading(false)
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
    setLoading(true)
    const data = await getProducts(null, null, nextPage)
    setLoading(false)
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

  const renderHeader = () => {
    return <SearchBar />
  }

  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator color='#aaa' />
    }
    return (
      showButton && (
        <View style={styles.footerContainer}>
          <Button onPress={loadNextPage} title='Ver mais' />
        </View>
      )
    )
  }

  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={renderFooter}
      />
    </View>
  )
}

export default ProductList
