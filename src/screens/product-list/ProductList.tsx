import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Button, FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons'
import { getProducts } from '../../logic/product/productService'
import ItemSeparator from '../../components/separator/ItemSeparator'
import ProductItem from './item/ProductItem'
import styles from './ProductList.styles'
import detailsStyles from '../product-details/ProductDetails.styles'
import SearchBar from '../../components/search-bar/SearchBar'
import { Product, RootStackParamList } from '../../types/commonTypes'
import { selectCartItems } from '../../redux/selectors/cartSelectors'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'
import EmptyState from '../../components/empty-state/EmptyState'
import { StackNavigationProp } from '@react-navigation/stack'

const SORT_ORDER = {
  ASC: 'ASC',
  DESC: 'DESC',
}

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductList'>
}

const ProductList = ({ navigation }: Props): JSX.Element => {
  const productsInCart = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const [sort, setSort] = useState('ASC')
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
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

  const isProductInCart = (id: string): boolean => {
    return productsInCart.some(item => item.id === id)
  }

  const extractItems = (data): Product[] => {
    const nextItems = []
    for (let i = 0; i < data.rows.length; i++) {
      nextItems.push(data.rows.item(i))
    }
    return nextItems
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(null, sort)
      const nextItems = extractItems(data)
      setItems(nextItems)
      setPage(data.page ?? 0)
      setLoading(false)
    }
    fetchData()
  }, [])

  const goToCart = () => navigation.navigate('Cart')

  const toggleSort = () => {
    const nextSort = sort === 'ASC' ? 'DESC' : 'ASC'
    setSort(nextSort)
    handleSearch(null, nextSort)
  }

  const handleSearch = async (
    name: string,
    sortOrder?: typeof SORT_ORDER.ASC | typeof SORT_ORDER.DESC,
  ) => {
    setRefreshing(true)
    const data = await getProducts(name, sortOrder)
    const nextItems = extractItems(data)
    setItems(nextItems)
    setPage(data.page ?? 0)
    setRefreshing(false)
    setShowButton(true)
  }

  const handleRefresh = () => {
    handleSearch(null, SORT_ORDER.ASC)
    setSort(SORT_ORDER.ASC)
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
    if (data.rows.length) {
      const fetchedItems = extractItems(data)
      setItems(items.concat(fetchedItems))
      setPage(nextPage)
    } else {
      hideButton()
    }
  }

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product))
  }

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const handleShopAndRedirect = (product: Product) => {
    handleAddToCart(product)
    goToCart()
  }

  const renderItem = ({ item }) => {
    const inCart = isProductInCart(item.id)
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
        onShopPress={() => handleShopAndRedirect(item)}
        onAddPress={() => handleAddToCart(item)}
        onRemovePress={() => handleRemoveItem(item.id)}
        inCart={inCart}
      />
    )
  }

  const renderHeader = () => {
    return <SearchBar onSearch={handleSearch} sort={sort} onSort={toggleSort} />
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
        ListEmptyComponent={EmptyState}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  )
}

export default ProductList
