import React from 'react'
import { View, Text } from 'react-native'
import styles from './PriceLabel.styles'
import MoneyText from '../money-text/MoneyText'
import { getSellingPrice } from '../../MathUtils'

const PriceLabel = ({ price, discount }): JSX.Element => {
  const hasDiscount = discount > 0
  const sellingPrice = getSellingPrice(price, discount)

  return (
    <View style={styles.container}>
      {hasDiscount && <MoneyText value={price} style={styles.fullPrice} />}
      <MoneyText value={sellingPrice} style={styles.sellingPrice} />
      {hasDiscount && <Text style={styles.discountLabel}>-{discount}%</Text>}
    </View>
  )
}

export default PriceLabel
