import React from 'react'
import { Text, View, Button } from 'react-native'

const ProductList = ({ navigation }): JSX.Element => {
  const goToDetails = () => {
      navigation.navigate('ProductDetails')
  }

  return (
    <View>
      <Text>Product List Screen</Text>
      <Button onPress={goToDetails} title='Go to' />
    </View>
  )
}

export default ProductList
