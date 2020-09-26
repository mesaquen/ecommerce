export type Product = {
  id: string
  title: string
  price: number
  rating: number
  reviews: number
  discount?: number
}

export type RootStackParamList = {
  Home: undefined,
  ProductList: undefined,
  ProductDetails: {id: string},
  Cart: undefined
}