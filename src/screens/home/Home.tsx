import React, { useEffect } from 'react'
import { CommonActions } from '@react-navigation/native'
import { View, ActivityIndicator } from 'react-native'
import DbInit from '../../database/DBInit'
import style from './Home.styles'

const Home = ({ navigation }): JSX.Element => {
  useEffect(() => {
    DbInit().then(() =>
      navigation.dispatch(
        CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'ProductList',
          },
        ],
      }),
    ))
  }, [])

  return (
    <View style={style.container}>
      <ActivityIndicator color='teal' size='large' />
    </View>
  )
}

export default Home
