import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Text,
  FlatList,
  View,
} from 'react-native'
import { FlatListSlider } from 'react-native-flatlist-slider'
import MoneyText from '../../components/money-text/MoneyText'
import ItemSeparator from '../../components/separator/ItemSeparator'
import StarRating from '../../components/star-rating/StarRating'
import { getProductById } from '../../logic/product/productService'
import { getRatingByProductId } from '../../logic/rating/ratingService'
import styles from './ProductDetails.styles'
import RatingListItem from './RatingListItem'

const images = [
  {
    image:
      'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
]

const ProductDetails = ({ route: { params } }): JSX.Element => {
  const [product, setProduct] = useState(null)
  const [comments, setComments] = useState([])
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

  const commentsKeyExtractor = item => item.id

  const renderRatingItem = ({ item, ...props }) => {
    return (
      <RatingListItem score={item.score} comment={item.comment} {...props} />
    )
  }

  if (product) {
    return (
      <SafeAreaView>
        <FlatList
        ListHeaderComponent={
          <View>
          <FlatListSlider
            data={images}
            onPress={() => undefined}
            imageKey='image'
            autoscroll={false}
          />
          <View style={styles.infoContainer}>
            <Text style={[styles.bold, styles.bigText, styles.title]}>
              {product.title}
            </Text>
            <View style={[styles.infoContainer, styles.card]}>
              <MoneyText
                style={[styles.bold, styles.bigText, styles.title]}
                value={product.price}
              />
              <Text style={[styles.bold, styles.title]}>Description</Text>
              <Text style={[styles.secondaryText]}>{product.description}</Text>
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
