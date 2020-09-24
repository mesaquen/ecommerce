import React from 'react'
import { Button, TouchableOpacity, Text, View } from 'react-native'
import styles from './ProductItem.styles'
import StarRating from '../../../components/star-rating/StarRating'

type ProductItemProps = {
  id: string
  title: string
  price: number
  rating: number
  reviews: number
  discount?: number
  onPress?: () => void
  onAddPress?: () => void
  onRemovePress?: () => void
}

const ProductItem = ({
  id,
  title,
  price,
  rating,
  discount,
  reviews,
  onPress,
  onAddPress,
  onRemovePress,
}: ProductItemProps): JSX.Element => (
  <TouchableOpacity key={id} style={styles.item}>
    <View style={styles.imageContainer}></View>
    <View style={styles.infoContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <StarRating rating={rating} reviews={reviews} compact />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <Button title='ADd to cart' onPress={() => undefined} />
      </View>
    </View>
  </TouchableOpacity>
)
export default ProductItem
