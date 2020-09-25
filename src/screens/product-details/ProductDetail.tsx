import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  FlatList,
  View,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons'
import { SliderBox } from 'react-native-image-slider-box'
import MoneyText from '../../components/money-text/MoneyText'
import ItemSeparator from '../../components/separator/ItemSeparator'
import StarRating from '../../components/star-rating/StarRating'
import { getImagesByProductId } from '../../logic/image/imageService'
import { getProductById } from '../../logic/product/productService'
import { getRatingByProductId } from '../../logic/rating/ratingService'
import styles from './ProductDetails.styles'
import RatingListItem from './RatingListItem'
import { selectCartItems } from '../../redux/selectors/cartSelectors'

const ProductDetails = ({ route: { params }, navigation }): JSX.Element => {
  const dispatch = useDispatch()
  const productsInCart = useSelector(selectCartItems)
  const [product, setProduct] = useState(null)
  const [comments, setComments] = useState([])
  const [images, setImages] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MCI.Button
            style={styles.cartButton}
            iconStyle={styles.cartButton}
            name='cart'
            onPress={goToCart}
          />
        )
      },
    })
  }, [navigation])

  useEffect(() => {
    const fetchData = async () => {
      const item = await getProductById(params.id)
      if (item) {
        setProduct(item)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getRatingByProductId(params.id)
      setComments(data)
    }
    fetchComments()
  }, [])

  useEffect(() => {
    const fetchImages = async () => {
      const data = await getImagesByProductId(params.id)
      const productImages = data.map(img => img.url)
      setImages(productImages)
      console.log('\n')
      console.log('== FETCHING IMAGES FOR ==', params.id)
      console.log(JSON.stringify(data))
    }
    fetchImages()
  }, [])

  const commentsKeyExtractor = item => item.id

  const renderRatingItem = ({ item, ...props }) => {
    return (
      <RatingListItem score={item.score} comment={item.comment} {...props} />
    )
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const goToCart = () => navigation.navigate('Cart')

  const handleAddToCartAndNavigate = () => {
    handleAddToCart()
    goToCart()
  }

  const isInCart = productsInCart.some(product => product.id === params.id)

  if (product) {
    return (
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            <View>
              <SliderBox sliderBoxHeight={230} images={images} />
              <View style={styles.infoContainer}>
                <View style={styles.topContainer}>
                  <Text style={[styles.bold, styles.bigText, styles.title]}>
                    {product.title}
                  </Text>
                  <View style={styles.buttonsContainer}>
                    {!isInCart && (
                      <MCI.Button
                        name='cart-outline'
                        onPress={handleAddToCartAndNavigate}
                      >
                        Comprar
                      </MCI.Button>
                    )}
                    {!isInCart && (
                      <View style={styles.lastButton}>
                        <MCI.Button name='cart-plus' onPress={handleAddToCart}>
                          Adcionar ao carrinho
                        </MCI.Button>
                      </View>
                    )}
                    {isInCart && (
                      <MCI.Button name='cart-remove' backgroundColor='red'>
                        Remover
                      </MCI.Button>
                    )}
                  </View>
                </View>
                <View style={[styles.infoContainer, styles.card]}>
                  <MoneyText
                    style={[styles.bold, styles.bigText, styles.title]}
                    value={product.price}
                  />
                  <Text style={[styles.bold, styles.title]}>Description</Text>
                  <Text style={[styles.secondaryText]}>
                    {product.description}
                  </Text>
                </View>
                <Text style={[styles.bold, styles.bigText]}>Avaliações</Text>
                <StarRating rating={product.rating} reviews={product.reviews} />
              </View>
            </View>
          }
          data={comments}
          renderItem={renderRatingItem}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={commentsKeyExtractor}
        />
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView>
      <ActivityIndicator size='large' color='#ddd' />
    </SafeAreaView>
  )
}

export default ProductDetails
