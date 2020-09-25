import { Product } from '../types/commonTypes'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export interface AddToCartAction {
  type: typeof ADD_TO_CART
  payload: Product
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART
  payload: string
}

export type CartReducer = {
  items: Product[]
}

export type RootReducer = {
    cart: CartReducer
}