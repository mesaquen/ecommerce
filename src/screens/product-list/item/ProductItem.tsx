import React, { useEffect, useState } from 'react'
import { Image, Button, TouchableOpacity, Text, View } from 'react-native'
import styles from './ProductItem.styles'
import StarRating from '../../../components/star-rating/StarRating'
import PriceLabel from '../../../components/price-label/PriceLabel'
import { getImagesByProductId } from '../../../logic/image/imageService'

type ProductItemProps = {
  id: string
  title: string
  price: number
  rating: number
  reviews: number
  discount?: number
  onPress?: (id) => void
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
}: ProductItemProps): JSX.Element => {
  const [productImage, setProductImage] = useState(null)
  useEffect(() => {
    const fetchImage = async () => {
      const imageList = await getImagesByProductId(id)
      const firstImage = imageList[0]?.url
      setProductImage(firstImage)
    }
    fetchImage()
  }, [])
  const handleOnPress = () => onPress(id)
  return (
    <TouchableOpacity key={id} style={styles.item} onPress={handleOnPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: productImage}} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <StarRating rating={rating} reviews={reviews} compact />
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <PriceLabel price={price} discount={discount} />
          </View>
          {onAddPress && <Button title='Comprar' onPress={onAddPress} />}
          {onRemovePress && <Button title='Remover' onPress={onRemovePress} />}
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default ProductItem
