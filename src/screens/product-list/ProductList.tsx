import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native'
import { getProducts } from '../../logic/product/productService'

const ProductList = ({ navigation }): JSX.Element => {
  const [txt, setTxt] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const images = await getProducts(null, null, 2);
      setTxt(JSON.stringify(images));
    }
    fetchData();
  }, [])
  const goToDetails = () => {
    navigation.navigate('ProductDetails')
  }

  return (
    <View>
      <Text>Product List Screen</Text>
      <Text>{txt}</Text>
      <Button onPress={goToDetails} title='Go to' />
    </View>
  )
}

export default ProductList
