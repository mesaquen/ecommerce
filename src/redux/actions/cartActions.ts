import { Product } from '../../types/commonTypes'
import { AddToCartAction, RemoveFromCartAction, ADD_TO_CART, REMOVE_FROM_CART } from '../types'

export const addToCart = (payload: Product): AddToCartAction => {
  return {
    type: ADD_TO_CART,
    payload,
  }
}

export const removeFromCart = (payload: string): RemoveFromCartAction => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}
