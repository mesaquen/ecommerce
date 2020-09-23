import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cart from './src/screens/cart/Cart'
import ProductDetails from './src/screens/product-details/ProductDetail'
import ProductList from './src/screens/product-list/ProductList'
import Home from './src/screens/home/Home'

const Stack = createStackNavigator()

export default function App (): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ProductList'
          component={ProductList}
          options={{ title: 'Produtos' }}
        />

        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{ title: 'Detalhes' }}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ title: 'Carrinho' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
