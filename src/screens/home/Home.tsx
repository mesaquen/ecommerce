import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import DbInit from '../../database/DBInit'
import style from './Home.styles'

const Home = ({ navigation }): JSX.Element => {
  useEffect(() => {
    DbInit().then(navigation.navigate('ProductList'))
  }, [])
  
  return (
    <View style={style.container}>
      <ActivityIndicator color='teal' size='large' />
    </View>
  )
}

export default Home
