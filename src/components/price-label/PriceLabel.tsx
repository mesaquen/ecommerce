import React from 'react'
import { View, Text } from 'react-native'
import styles from './PriceLabel.styles'
import MoneyText from '../money-text/MoneyText'

const PriceLabel = ({ price, discount }): JSX.Element => {
  const hasDiscount = discount > 0
  const getSellingPrice = (): number => {
    if (hasDiscount) {
      return (1 - discount / 100) * price
    }
    return price
  }

  const sellingPrice = getSellingPrice()

  return (
    <View style={styles.container}>
      {hasDiscount && <MoneyText value={price} style={styles.fullPrice} />}
      <MoneyText value={sellingPrice} style={styles.sellingPrice} />
      {hasDiscount && <Text style={styles.discountLabel}>-{discount}%</Text>}
    </View>
  )
}

export default PriceLabel
