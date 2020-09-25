import React, { useEffect, useState } from 'react'
import { Image, Button, TouchableOpacity, Text, View } from 'react-native'
import styles from './ProductItem.styles'
import StarRating from '../../../components/star-rating/StarRating'
import PriceLabel from '../../../components/price-label/PriceLabel'
import { getImagesByProductId } from '../../../logic/image/imageService'
import {MaterialCommunityIcons as MCI} from '@expo/vector-icons'

type ProductItemProps = {
  id: string
  title: string
  price: number
  rating: number
  reviews: number
  discount?: number
  inCart: boolean
  onPress?: (id) => void
  onShopPress?: () => void
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
  inCart,
  onPress,
  onShopPress,
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
        <Image style={styles.image} source={{ uri: productImage }} />
      </View>
        <View style={styles.infoContainer}>
      <View style={styles.upperContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <StarRating rating={rating} reviews={reviews} compact />
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.price}>
              <PriceLabel price={price} discount={discount} />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {!inCart && <MCI.Button color='#09D' iconStyle={styles.flat} backgroundColor='transparent' name='cart-outline' onPress={onShopPress}>Comprar</MCI.Button>}
          {!inCart && <MCI.Button color='#09D' iconStyle={styles.flat} backgroundColor='transparent' name='cart-plus' onPress={onAddPress}>Adicionar</MCI.Button>}
          {inCart && <MCI.Button color='#D30' iconStyle={styles.flatRemove} backgroundColor='transparent'  name='cart-remove' onPress={onRemovePress}>Remover</MCI.Button>}
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default ProductItem
