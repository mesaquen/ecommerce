import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Button, FlatList, ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons'
import { getProducts } from '../../logic/product/productService'
import ItemSeparator from '../../components/separator/ItemSeparator'
import ProductItem from './item/ProductItem'
import styles from './ProductList.styles'
import detailsStyles from '../product-details/ProductDetails.styles'
import SearchBar from '../../components/search-bar/SearchBar'

const ProductList = ({ navigation }): JSX.Element => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [page, setPage] = useState(0)
  const [showButton, setShowButton] = useState(true)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MCI.Button
            style={detailsStyles.cartButton}
            iconStyle={detailsStyles.cartButton}
            name='cart'
            onPress={goToCart}
          />
        )
      },
    })
  }, [navigation])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      const nextItems = []
      for (let i = 0; i < data.rows.length; i++) {
        nextItems.push(data.rows.item(i))
      }
      setItems(nextItems)
      setPage(data.page ?? 0)
      setLoading(false)
    }
    fetchData()
  }, [])

  const goToCart = () => navigation.navigate('Cart')

  const handleSearch = async name => {
    setLoading(true)
    const data = await getProducts(name)
    setItems(data._array)
    setPage(data.page ?? 0)
    setLoading(false)
  }

  const goToDetails = id => {
    navigation.navigate('ProductDetails', { id })
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
        onPress={goToDetails}
      />
    )
  }

  const renderHeader = () => {
    return <SearchBar onSearch={handleSearch} />
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
